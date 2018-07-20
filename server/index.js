const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const buoyObj = require('./models/buoys');
const boundsObj = require('./models/bounds');
const controllers = require('./controllers/controllers');

const { disconnect, connectID, addBuoy, updateBuoyData, subscribeToBuoys } = controllers;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  //Creates a record of for this  client
  console.log('New Application Connected');

  //Request Manager
  //I have turned most into promises so that when concurrency is increased, they will not be blocking.
  socket.on('request', (reqObj, ackCallback) => {
    reqObj = JSON.parse(reqObj);
    let resObj;
    switch (reqObj.method) {
      case 'disconnect':
        disconnect(socket, reqObj);
        break;
      case 'connectID':
        resObj = connectID(socket, reqObj).then(res => {
          resObj = res;
          resObj.jsonrpc = '2.0';
          ackCallback(JSON.stringify(resObj));
        });
        break;
      case 'addBuoy':
        addBuoy(socket, reqObj).then(res => {
          //builds acknowledgement object, and then acknowledges the request once the promise has resolved. Same for all below.
          resObj = res;
          resObj.jsonrpc = '2.0';
          ackCallback(JSON.stringify(resObj));
        });
        break;
      case 'updateBuoyData':
        resObj = updateBuoyData(socket, reqObj).then(res => {
          resObj = res;
          resObj.jsonrpc = '2.0';
          ackCallback(JSON.stringify(resObj));
        });
        break;
      case 'subscribeToBuoys':
        resObj = subscribeToBuoys(socket, reqObj).then(res => {
          resObj = res;
          resObj.jsonrpc = '2.0';
          ackCallback(JSON.stringify(resObj));
        });
    }
  });
});

const port = process.env.port || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
