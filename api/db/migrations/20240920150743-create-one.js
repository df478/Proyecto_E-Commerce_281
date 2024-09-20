'use strict';

const { DepartamentoSchema, DEPARTAMENTO_TABLE } = require('./../models/departamento.model')
const { ProvinciaSchema, PROVINCIA_TABLE } = require('./../models/provincia.model')
const { ClienteSchema, CLIENTE_TABLE } = require('./../models/cliente.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(DEPARTAMENTO_TABLE, DepartamentoSchema);
    await queryInterface.createTable(PROVINCIA_TABLE, ProvinciaSchema);
    // await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(DEPARTAMENTO_TABLE);
    // await queryInterface.dropTable(PROVINCIA_TABLE);
    // await queryInterface.dropTable(CLIENTE_TABLE);
  }
};
