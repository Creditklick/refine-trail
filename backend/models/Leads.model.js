const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = require("../util/database");
const Lead = sequelize.define("leads", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  pan: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  pincode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  query: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Lead;
