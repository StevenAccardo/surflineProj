const express = require('express');
const http = require('http');
const socketIOClient = require('socket.io-client');

const app = express();
const server = http.createServer(app);

const socket = socketIOClient('http://localhost:3000');
socket.on('connect', () => {
  console.log('Connected to Server');

  const sendIt = reqObj => {
    const id = 'hdhfjdshofhsdoihoieiwhriowehiohd';
    reqObj.id = id;
    reqObj.jsonrpc = '2.0';

    socket.emit('request', JSON.stringify(reqObj), res => console.log(res));
  };

  const addEm = () => {
    const arr = [
      {
        method: 'addBuoy',
        params: {
          name: 'scripps_nearshore',
          lat: 32.868,
          lon: -117.267
        }
      },

      { method: 'addBuoy', params: { name: 'west_oregon', lat: 42.612, lon: -130.537 } },
      { method: 'addBuoy', params: { name: 'harvest_buoy', lat: 34.454, lon: -120.783 } }
    ];

    arr.forEach(obj => {
      sendIt(obj);
    });
  };

  const updateEm = () => {
    const arr = [
      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 12 } },
      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 8, period: 12 } }
    ];

    arr.forEach(obj => {
      sendIt(obj);
    });
  };

  const updateEmLong = () => {
    const arr = [
      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } },

      { method: 'updateBuoyData', params: { name: 'scripps_nearshore', height: 8, period: 8 } },

      { method: 'updateBuoyData', params: { name: 'west_oregon', height: 3, period: 3 } },

      { method: 'updateBuoyData', params: { name: 'harvest_buoy', height: 13, period: 13 } }
    ];

    arr.forEach(obj => {
      sendIt(obj);
    });
  };

  //should error
  // socket.emit(
  //   'updateBuoyData',
  //   JSON.stringify({
  //     jsonrpc: '2.0',
  //     method: 'updateBuoyData',
  //     params: {
  //       name: 'SAN PEDRO',
  //       height: 2.6,
  //       period: 8
  //     },
  //     id: '3f052f4f-2f4a-46d8-aee7-fb6639942795'
  //   })
  // );
  //
  // //should not error
  // socket.emit(
  //   'request',
  //   JSON.stringify({
  //     jsonrpc: '2.0',
  //     method: 'addBuoy',
  //     params: {
  //       name: 'SAN PEDRO',
  //       lat: 33.618,
  //       lon: -118.317
  //     },
  //     id: '3f052f4f-2f4a-46d8-aee7-fb6639942795'
  //   }),
  //   res => console.log(res)
  // );
  //
  // //should not error
  // socket.emit(
  //   'request',
  //   JSON.stringify({
  //     jsonrpc: '2.0',
  //     method: 'addBuoy',
  //     params: {
  //       name: 'SANta ana',
  //       lat: 33.744564,
  //       lon: -117.868298
  //     },
  //     id: '3f052f4f-2f4a-46d8-aee7-fb6639942795'
  //   }),
  //   res => console.log(res)
  // );
  //
  // //should not error
  // socket.emit(
  //   'request',
  //   JSON.stringify({
  //     jsonrpc: '2.0',
  //     method: 'addBuoy',
  //     params: {
  //       name: 'tustin',
  //       lat: 33.739996,
  //       lon: -117.820233
  //     },
  //     id: '3f052f4f-2f4a-46d8-aee7-fb6639942795'
  //   }),
  //   res => console.log(res)
  // );
  //
  // //should not error
  // socket.emit(
  //   'request',
  //   JSON.stringify({
  //     jsonrpc: '2.0',
  //     method: 'addBuoy',
  //     params: {
  //       name: 'Africa',
  //       lat: 6.414992,
  //       lon: 7.729928
  //     },
  //     id: '3f052f4f-2f4a-46d8-aee7-fb6639942795'
  //   }),
  //   res => console.log(res)
  // );
  //
  // //should error
  // // socket.emit(
  // //   'addBuoy',
  // //   JSON.stringify({
  // //     jsonrpc: '2.0',
  // //     method: 'addBuoy',
  // //     params: {
  // //       name: 'SAN PEDRO',
  // //       lat: 33.618,
  // //       lon: -118.317
  // //     },
  // //     id: '3f052f4f-2f4a-46d8-aee7-fb6639942795'
  // //   })
  // // );
  //
  // //should not error
  // socket.emit(
  //   'request',
  //   JSON.stringify({
  //     jsonrpc: '2.0',
  //     method: 'updateBuoyData',
  //     params: {
  //       name: 'SAN PEDRO',
  //       height: 2.6,
  //       period: 8
  //     },
  //     id: '3f052f4f-2f4a-46d8-aee7-fb6639942795'
  //   }),
  //   res => console.log(res)
  // );
  //
  // //should not error
  // socket.emit(
  //   'request',
  //   JSON.stringify({
  //     jsonrpc: '2.0',
  //     method: 'addBuoy',
  //     params: {
  //       name: 'san diego',
  //       lat: 32.715736,
  //       lon: -117.161087
  //     },
  //     id: '3f052f4f-2f4a-46d8-aee7-fb6639942795'
  //   }),
  //   res => console.log(res)
  // );

  addEm();
  updateEm();
  updateEmLong();
});

socket.on('e', res => console.log(res));
socket.on('addedBuoy', res => console.log(res));
socket.on('updatedBuoy', res => console.log(res));

const port = process.env.port || 3002;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
