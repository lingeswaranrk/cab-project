const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Driver = require('./driver');

const Cab = sequelize.define('Cab', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Cabno: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Cabmodel: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
   
    Cabcapacity: {
        type: DataTypes.INTEGER(50),
        allowNull: false
    },
    Cabdescription: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
});

Driver.hasMany(Cab)
Cab.belongsTo(Driver)
module.exports = Cab;