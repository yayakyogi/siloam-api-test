export {};
const { DataTypes } = require("sequelize");
const sequelize = require("../config/config.ts");
const Vendor = require("./vendor");

const Unit = sequelize.define(
  "units",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Adds 'createdAt' and 'updatedAt' fields
  }
);

module.exports = Unit;
