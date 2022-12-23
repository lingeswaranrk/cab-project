const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Driver = sequelize.define('Driver', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

password:{
    type: DataTypes.STRING,
        allowNull: false
},
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    license_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
       
    }



});
module.exports = Driver;
