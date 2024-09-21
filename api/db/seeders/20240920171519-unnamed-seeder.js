"use strict";

const { generateAndExport } = require("../data/cliente.data");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const clienteData = await generateAndExport();
    await queryInterface.bulkInsert("cliente", clienteData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cliente", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
