const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('test_db', 'root', '0024754080', {
    dialect: 'mysql',
    host: 'localhost'
})



module.exports = sequelize;