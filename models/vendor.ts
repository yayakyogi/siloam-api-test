export {};
const { DataTypes } = require("sequelize");
const sequelize = require("../config/config.ts");
const Unit = require("./unit");

const Vendor = sequelize.define(
  "vendors",
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "units",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  },
  {
    timestamps: true, // Adds 'createdAt' and 'updatedAt' fields
  }
);

// Vendor belongs to Unit
Vendor.belongsTo(Unit, {
  foreignKey: "unit_id", // Reference to the unitId in the Vendor table
  as: "units", // This is the alias for the Unit
}); // Unit is related to Vendor via unitId

module.exports = Vendor;
