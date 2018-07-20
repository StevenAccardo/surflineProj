import socketIOClient from 'socket.io-client';
//creates our random ids
import uniqid from 'uniqid';
import { CLIENT_ID, BUOYS } from './types/types';
import store from './store';

const socket = socketIOClient('http://localhost:3000');

//sends  requests
const sendIt = reqObj => {
  socket.emit('request', JSON.stringify(reqObj), res => {
    if (JSON.parse(res).result !== 'ok') console.log(res);
  });
};

//Invoked when app is mounted checks app state and grabs id if there is one, if not it will still send up default value  of null, which is handled byserver
export const sockConnect = () => {
  socket.on('connect', () => {
    const connObj = {
      jsonrpc: '2.0',
      method: 'connectID',
      params: {
        clientID: store.getState().clientID
      },
      id: uniqid()
    };

    sendIt(connObj);
  });
};

//Invoked when map is zoomed or scrolled, sends map bounds to server
export const subscribeToBuoys = boundsObj => {
  const subscribeObj = {
    jsonrpc: '2.0',
    method: 'subscribeToBuoys',
    params: boundsObj,
    id: uniqid()
  };
  sendIt(subscribeObj);
};

//listens for buoy updates, and then either updates or adds them. The buoy array is never cleared out on the client side, this is a feature in addition to the precaching. So once a user has subscribed to a location on the map, those buoy locations will still render to map when they come back even if the updated response hasn't returned yet. This reduces any perceived effects of latency.
socket.on('buoyNotification', res => {
  //Pull off only the buoy params
  const buoyObj = JSON.parse(res).params;

  //Create copy of buoy array, so not to mututate the store object
  const stateBuoysArr = [...store.getState().buoys];
  //check to see if a buoy already exists with the same name
  const index = stateBuoysArr.findIndex(buoy => buoy.name === buoyObj.name);
  //if buoy exists, replace it to get most up-to-date info, otherwise add it
  if (index >= 0) {
    stateBuoysArr[index] = buoyObj;
  } else {
    stateBuoysArr.push(buoyObj);
  }

  //create action to update app state
  store.dispatch({
    type: BUOYS,
    payload: stateBuoysArr
  });
});

//listens for response with new clientID, then stores id in local storage
socket.on('connectedID', res => {
  const paresedRes = JSON.parse(res);
  //stores the clientID in the browser's local storage to persist through refreshes.
  window.localStorage.setItem('clientID', paresedRes);
  store.dispatch({
    type: CLIENT_ID,
    payload: paresedRes
  });
});
