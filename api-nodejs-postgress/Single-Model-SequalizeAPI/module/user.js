const { DataTypes } = require('sequelize');
const {sequelize} = require("./index");

const User = sequelize.define('User', {
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
  tableName:"Company"
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports={User}