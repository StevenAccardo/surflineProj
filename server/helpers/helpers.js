const boundsObj = require('../models/bounds');

module.exports = {
  //invoked by addbuoy controller, checks to see if newly added buoy is in client's current bounds, if so, send them buoyNotification
  checkBuoyInBounds(socket, params) {
    const { name, lat, lon } = params;
    const nameUp = name.toUpperCase();
    //iterate over  bounds obj
    for (let prop in boundsObj) {
      //If the buoy is within the bounds
      if (lon > boundsObj[prop].bounds.west && lon < boundsObj[prop].bounds.east && lat > boundsObj[prop].bounds.south && lat < boundsObj[prop].bounds.north) {
        const buoy = {
          name: nameUp,
          lat: lat,
          lon: lon,
          height: 0,
          period: 0
        };
        //add buoy to client's buoy object
        boundsObj[prop].buoys[nameUp] = buoy;

        //send notification to user client,so they can update their map
        const buoyNotification = {
          jsonrpc: '2.0',
          method: 'buoyNotification',
          params: buoy
        };
        //only sends to specific client, this is another reason why we needed access to the socket.id( clientID)
        socket.broadcast.to(prop).emit('buoyNotification', JSON.stringify(buoyNotification));
      }
    }
  },

  //Invoked by updateBuoyData controller
  //Takes newly passed/saved buoy, and searches client bounds to see if it needs to update one of their buoys
  checkClientSubscribed(socket, updatedBuoy) {
    const { lat, lon, height, period, name } = updatedBuoy;
    //iterate through clients
    for (let prop in boundsObj) {
      //If the updated buoy is on the client's buoy object, then update it and send the notification
      if (boundsObj[prop].buoys[updatedBuoy.name]) {
        boundsObj[prop].buoys[updatedBuoy.name].height = height;
        boundsObj[prop].buoys[updatedBuoy.name].period = period;

        //build notification
        const buoyNotification = {
          jsonrpc: '2.0',
          method: 'buoyNotification',
          params: boundsObj[prop].buoys[updatedBuoy.name]
        };
        //send it
        socket.broadcast.to(prop).emit('buoyNotification', JSON.stringify(buoyNotification));
      }
    }
  },
  //Calcs distance
  getDist(south, west, north, east) {
    //distance formula
    return Math.sqrt(east - west + (north - south));
  },
  //Increases bounds on each side, but also makes sure we don't increase bounds past map bounds lat -90 to 90, lon -180 to 180;
  increaseBound(dist, bound) {
    let newBound;

    switch (bound.name) {
      case 'south':
        if (bound.val - dist > -90) {
          newBound = bound.val - dist;
        } else {
          newBound = -90;
        }
        break;
      case 'north':
        if (bound.val + dist < 90) {
          newBound = bound.val + dist;
        } else {
          newBound = 90;
        }
        break;
      case 'east':
        if (bound.val + dist < 180) {
          newBound = bound.val + dist;
        } else {
          newBound = 180;
        }
        break;
      case 'west':
        if (bound.val - dist > -180) {
          newBound = bound.val - dist;
        } else {
          newBound = -180;
        }
        break;
    }

    return newBound;
  }
};
