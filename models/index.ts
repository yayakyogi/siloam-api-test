export {};
("use strict");

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db: any = {};
const sequelize = require("../config/config.ts");
const Unit = require("./unit");
const Vendor = require("./vendor");

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Define Associations
Unit.hasMany(Vendor, {
  foreignKey: "unitId", // unitId will be added to the Vendor table
  as: "vendors", // This is an alias for the association
});

module.exports = db;
