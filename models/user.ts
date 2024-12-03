export {};
const { DataTypes } = require("sequelize");
const sequelize = require("../config/config.ts");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Adds 'createdAt' and 'updatedAt' fields
  }
);

module.exports = User;
