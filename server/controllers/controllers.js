const buoyObj = require('../models/buoys');
const boundsObj = require('../models/bounds');
const helpers = require('../helpers/helpers');
const { checkClientSubscribed, checkBuoyInBounds, increaseBound, getDist } = helpers;

module.exports = {
  disconnect(socket, reqObj) {
    console.log('Application disconnected');
  },
  //Client sends  method on Application start, and reconnection (reconenction automatic with socket.io)
  connectID(socket, reqObj) {
    return new Promise(resolve => {
      const { jsonrpc, params, id } = reqObj;

      //ensures proper protocal from client, and a request id.
      if (jsonrpc === '2.0' && id) {
        //Did the client have an actual id to pass in? Otherwise it would have been null which indicates they are a new user. If they did have an id already, is it in the boundsObj, which is should be for sure, but still worth checking.
        if (params.clientID && boundsObj[params.clientID]) {
          //updates the clientID, so we will  be able to reachout to the client later to push updates tailored for that clientID (buoy updates and additions)
          //We always update the clientID with the newest socket.id to keep from having to use two different ids, this also allows us to search for clients by socket.id vs having to iterate a loop. Saves on time complexity.
          //Creates new object with new socket.id as property name, had to do it this way since the actual id is the key to access  the object since I want to avoid iterating to find a client in what could be  1 million + clients.
          boundsObj[socket.id] = Object.assign({}, boundsObj[params.clientID]);
          //deletes old property with old client name
          delete boundsObj[params.clientID];
          //If no id is stored, then the client is new, create an ID, and create a bounds object for that client
        } else {
          boundsObj[socket.id] = {
            bounds: {
              south: 0,
              west: 0,
              north: 0,
              east: 0
            },
            buoys: {}
          };
        }

        //send new id to client for them to place in app state and browser local storage
        const res = socket.id;
        socket.emit('connectedID', JSON.stringify(res));

        resolve({ result: 'ok', id });
      } else {
        //imporper formmat
        resolve({
          result: 'The request was not structured properly, or is missing data. Please review and retry.',
          id
        });
      }
    });
  },
  //adds buoy
  addBuoy(socket, reqObj) {
    return new Promise(resolve => {
      const { jsonrpc, params, id } = reqObj;
      //checks format
      if (jsonrpc === '2.0' && typeof params.name === 'string' && params.lat >= -90 && params.lat <= 90 && params.lon >= -180 && params.lon <= 180 && id) {
        //check if buoy has already been added, ensures all name are capped
        if (!buoyObj[params.name.toUpperCase()]) {
          //Add buoy
          buoyObj[params.name.toUpperCase()] = {
            name: params.name.toUpperCase(),
            lat: params.lat,
            lon: params.lon,
            height: 0,
            period: 0
          };
          //checks to see if the buoy is  within the bounds of users, if so it stores in their buoy object and sends them a notification
          //This allows us to update client realtime as buoys are added
          checkBuoyInBounds(socket, params);
          resolve({ result: 'ok', id });
        } else {
          //send back error telling client to use update instead
          resolve({
            result: 'The buoy has already been added, please use the the updateBuoyData method instead.',
            id
          });
        }
      } else {
        //send  back json with error
        resolve({
          result: 'The request was not structured properly, or is missing data. Please review and retry.',
          id
        });
      }
    });
  },

  updateBuoyData(socket, reqObj) {
    return new Promise(resolve => {
      const { jsonrpc, params, id } = reqObj;
      const nameUp = params.name.toUpperCase();
      //checks format
      if (jsonrpc === '2.0' && typeof params.name === 'string' && params.height >= 0 && params.period >= 0 && id) {
        //Ensures buoy has already been added
        if (buoyObj[nameUp]) {
          //if so, update buoy
          buoyObj[nameUp].height = params.height;
          buoyObj[nameUp].period = params.period;

          const updatedBuoy = buoyObj[nameUp];
          //Checks to see what clients are subscribed to this buoy, adds buoy to their buoy object and sends out buoyNotification
          checkClientSubscribed(socket, updatedBuoy);
          resolve({ result: 'ok', id });
        } else {
          //send back error telling client to use addBuoy method instead
          resolve({
            result: "This buoy hasn't been added yet, please use the the addBuoy method first.",
            id
          });
        }
      } else {
        //send  back json with error
        resolve({
          result: 'The request was not structured properly, or is missing data. Please review and retry.',
          id
        });
      }
    });
  },

  subscribeToBuoys(socket, reqObj) {
    return new Promise(resolve => {
      const { jsonrpc, params, id } = reqObj;
      const { south, west, north, east } = params;
      //checks format
      if (jsonrpc === '2.0' && (south >= -90 && south <= 90) && (north >= -90 && north <= 90) && (west >= -180 && west <= 180) && (east >= -180 && east <= 180) && id) {
        //find the client's bounds object
        //updates the  client's bounds properties
        //Constant time complexity
        const clientData = boundsObj[socket.id];

        //Pre-caching
        //calls helper method, that will use distance formula to calculate latlon  distance between bounds corners, and then will  return each bounds expanded  by that distance.This will populate points outside of the current bounds, so if the use scrolls in any direction by one viewport width, they will have stored data. I calculated the distance instead of expanding each side by some arbitrary distance because those distances should be different at different zoom levels. For exmple, arbitrarily adding 1 to each bound coordinate covers more area at a high zoom number, than at a low one. So to get a good/fair padding everytime, I used the distance between. I was going to create two separate  bounds, one the client's bounds, and one larger as the cache bounds. However, the extra  credit points are conflicting because the point of the precache is to have extra  markers outside of the view,  so when user scrolls they will see views as if they have  always been there (because they have.
        //However the extra credit also states that we want to only update the client with new buoys within its bounds, but what would be the point of caching outside fo the clients  view  if you aren't going to update those as well. Plus, if a user moves their bounds a bit, then we would want to precache for that  new bound as  well. So I decided to make the bounds equal to the precache bounds limits,  and not just the user's viewport bounds.
        const dist = getDist(south, west, north, east);

        clientData.bounds.south = increaseBound(dist, { name: 'south', val: south });
        clientData.bounds.west = increaseBound(dist, { name: 'west', val: west });
        clientData.bounds.north = increaseBound(dist, { name: 'north', val: north });
        clientData.bounds.east = increaseBound(dist, { name: 'east', val: east });

        //Copy the old buoy object to use in diff'ing
        //Then clear out the client's buoy object
        const oldObj = Object.assign({}, clientData.buoys);
        clientData.buoys = {};

        //iterate over buoy objects (the buoy model, not the client's buooy object)
        for (let prop in buoyObj) {
          //If those buoys are between the boundaries
          if (buoyObj[prop].lon > clientData.bounds.west && buoyObj[prop].lon < clientData.bounds.east && buoyObj[prop].lat > clientData.bounds.south && buoyObj[prop].lat < clientData.bounds.north) {
            //Create a new buoy object onto the client's buoy object
            //We are repopulating the client object with up-to-date buoys
            clientData.buoys[prop] = buoyObj[prop];

            //if no match that means this is a new buoy for the client, and we should notify them.
            if (!oldObj[prop]) {
              const buoyNotification = {
                jsonrpc: '2.0',
                method: 'buoyNotification',
                params: {
                  name: prop,
                  lat: buoyObj[prop].lat,
                  lon: buoyObj[prop].lon,
                  height: buoyObj[prop].height,
                  period: buoyObj[prop].period
                }
              };
              //send buoy notification
              socket.emit('buoyNotification', JSON.stringify(buoyNotification));
            }
          }
        }
        resolve({ result: 'ok', id });
      } else {
        resolve({
          result: 'The request was not structured properly, or is missing data. Please review and retry.',
          id
        });
      }
    });
  }
};
