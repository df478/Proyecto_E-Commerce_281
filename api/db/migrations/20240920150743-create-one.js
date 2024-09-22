'use strict';

const { DepartamentoSchema, DEPARTAMENTO_TABLE } = require('./../models/departamento.model')
const { ProvinciaSchema, PROVINCIA_TABLE } = require('./../models/provincia.model')
const { MunicipioSchema, MUNICIPIO_TABLE } = require('./../models/municipio.model')
const { ComunidadSchema, COMUNIDAD_TABLE } = require('./../models/comunidad.model')
const { ClienteSchema, CLIENTE_TABLE } = require('./../models/cliente.model')
const { ArtesanoSchema, ARTESANO_TABLE } = require('./../models/artesano.model')
const { DeliverySchema, DELIVERY_TABLE } = require('./../models/delivery.model')
const { AdministradorSchema, ADMINISTRADOR_TABLE } = require('./../models/administrador.model')

const { PromocionSchema, PROMOCION_TABLE } = require('./../models/promocion.model')
const { ProductoSchema, PRODUCTO_TABLE } = require('./../models/producto.model')
const { RESENIA_TABLE, ReseniaSchema } = require('../models/resenia.model');
const { PAGO_TABLE, PagoSchema } = require('../models/pago.model');
const { NOTIFICACION_TABLE, notificacionSchema } = require('../models/notificacion.model');
const { CARRITO_TABLE, CarritoSchema } = require('../models/carrito.model');
const { PEDIDO_TABLE, pedidoSchema } = require('../models/pedido.model');



module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(DEPARTAMENTO_TABLE, DepartamentoSchema);
    await queryInterface.createTable(PROVINCIA_TABLE, ProvinciaSchema);
    await queryInterface.createTable(MUNICIPIO_TABLE, MunicipioSchema);
    await queryInterface.createTable(COMUNIDAD_TABLE, ComunidadSchema);

    await queryInterface.createTable(ARTESANO_TABLE, ArtesanoSchema);
    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema);
    await queryInterface.createTable(DELIVERY_TABLE, DeliverySchema);
    await queryInterface.createTable(ADMINISTRADOR_TABLE, AdministradorSchema);

    await queryInterface.createTable(PROMOCION_TABLE, PromocionSchema);
    await queryInterface.createTable(PRODUCTO_TABLE, ProductoSchema);
    await queryInterface.createTable(RESENIA_TABLE, ReseniaSchema);
    
    await queryInterface.createTable(CARRITO_TABLE, CarritoSchema);
    await queryInterface.createTable(PEDIDO_TABLE, pedidoSchema);
    await queryInterface.createTable(PAGO_TABLE, PagoSchema);
    await queryInterface.createTable(NOTIFICACION_TABLE, notificacionSchema);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(NOTIFICACION_TABLE);


    await queryInterface.dropTable(PAGO_TABLE);
    await queryInterface.dropTable(PEDIDO_TABLE);
    await queryInterface.dropTable(CARRITO_TABLE)

    await queryInterface.dropTable(RESENIA_TABLE);
    await queryInterface.dropTable(PRODUCTO_TABLE);
    await queryInterface.dropTable(PROMOCION_TABLE);


    await queryInterface.dropTable(ADMINISTRADOR_TABLE);
    await queryInterface.dropTable(DELIVERY_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);
    await queryInterface.dropTable(ARTESANO_TABLE);

    await queryInterface.dropTable(COMUNIDAD_TABLE);
    await queryInterface.dropTable(MUNICIPIO_TABLE);
    await queryInterface.dropTable(PROVINCIA_TABLE);
    await queryInterface.dropTable(DEPARTAMENTO_TABLE);


  }
};
