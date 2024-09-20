'use strict';

const { DepartamentoSchema, DEPARTAMENTO_TABLE } = require('./../models/departamento.model')
const { ProvinciaSchema, PROVINCIA_TABLE } = require('./../models/provincia.model')
const { MunicipioSchema, MUNICIPIO_TABLE } = require('./../models/municipio.model')
const { ComunidadSchema, COMUNIDAD_TABLE } = require('./../models/comunidad.model')
const { ClienteSchema, CLIENTE_TABLE } = require('./../models/cliente.model')
const { ArtesanoSchema, ARTESANO_TABLE } = require('./../models/artesano.model')
const { DeliverySchema, DELIVERY_TABLE } = require('./../models/delivery.model')
const { AdministradorSchema, ADMINISTRADOR_TABLE } = require('./../models/administrador.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(DEPARTAMENTO_TABLE, DepartamentoSchema);
    await queryInterface.createTable(PROVINCIA_TABLE, ProvinciaSchema);
    await queryInterface.createTable(MUNICIPIO_TABLE, MunicipioSchema);
    await queryInterface.createTable(COMUNIDAD_TABLE, ComunidadSchema);

    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema);
    // await queryInterface.createTable(ARTESANO_TABLE, ArtesanoSchema);
    await queryInterface.createTable(DELIVERY_TABLE, DeliverySchema);
    await queryInterface.createTable(ADMINISTRADOR_TABLE, AdministradorSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ADMINISTRADOR_TABLE);
    await queryInterface.dropTable(DELIVERY_TABLE);
    // await queryInterface.dropTable(ARTESANO_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);

    await queryInterface.dropTable(COMUNIDAD_TABLE);
    await queryInterface.dropTable(MUNICIPIO_TABLE);
    await queryInterface.dropTable(PROVINCIA_TABLE);
    await queryInterface.dropTable(DEPARTAMENTO_TABLE);
  }
};
