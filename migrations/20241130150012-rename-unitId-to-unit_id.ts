"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("vendors", "unitId", "unit_id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Vendors", "unit_id", "unitId");
  },
};
