const sequelize = require('../config/dbConfig');
const { DataTypes } = require('sequelize');




const Todo = sequelize.define('Todo', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    IsDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
    }
})

module.exports = Todo;