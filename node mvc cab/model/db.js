const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("cab1", "root", "2000", {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;