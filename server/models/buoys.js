//using an object of objects instead of an array of objects so that when updating, we don't have to loop. Slight decrease in time complexity. Not many buoys, so not a huge deal, but gains are gains. Still will need to iterate through when client subscribes to buoys.

const buoyObj = {};

module.exports = buoyObj;
