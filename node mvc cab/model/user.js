const sequelize = require('./db');
const { DataTypes } = require('sequelize');


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstName: {
        type: DataTypes.STRING(25),
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING(25),
        allowNull: false
    },

    password: {
        type: DataTypes.INTEGER(40),
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER(15),
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false

    }


});

module.exports = User;