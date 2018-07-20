//created this an object so that we can store the clientID as the key for each property, so when the bounds change we can do a constant time complexity lookup instead of iterating over each client. Theoretically we could have 1 million plus clients, so this is where you will see the most strain when trying to iterate  and access.

const boundsObj = {};

module.exports = boundsObj;
