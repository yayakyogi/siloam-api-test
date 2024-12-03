const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("siloam", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  port: 5500,
});

try {
  sequelize.authenticate();
  console.log("Database connected");
} catch (error) {
  console.log("Error ", error);
}

module.exports = sequelize;
