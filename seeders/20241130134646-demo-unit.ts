"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "units",
      [
        {
          name: "Siloam Lipo Village",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Siloam Bogor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Siloam Makasar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("units", null, {});
  },
};
