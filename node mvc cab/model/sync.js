const user = require('./user');
const cab = require('./cab');
const ride= require('./ride');
const driver= require('./driver');



// user.sync({alter: true});
ride.sync({alter: true});
// driver.sync({alter: true});
cab.sync({alter: true});