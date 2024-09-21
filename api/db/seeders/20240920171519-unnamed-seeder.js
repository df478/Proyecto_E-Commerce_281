"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cliente", [
      {
        id_usuario: 117,
        nombre_usuario: "macho",
        email_usuario: "macho@gmail.com",
        password_usuario:
          "$2b$10$WaX/FparAlVdPRYKUXR5mOftTDnIgOv6SGEBD7a7SpQHeJxIi8ghi",
        tipo_usuario: "cliente",
        fecha_registro: "2015-05-05",
      },
      {
        id_usuario: 118,
        nombre_usuario: "macho3",
        email_usuario: "mach3o@gmail.com",
        password_usuario:
          "$2b$10$WaX/FparAlVdPRYKUXR5mOftTDnIgOv6SGEBD7a7SpQHeJxIi8ghi",
        tipo_usuario: "cliente",
        fecha_registro: "2023-02-01",
      },
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cliente', null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
