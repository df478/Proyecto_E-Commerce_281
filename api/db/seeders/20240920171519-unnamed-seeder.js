"use strict";

const { generarAdministrador } = require("../data/administrador.data");
const { generarArtesano } = require("../data/artesano.data");
const { generarCarrito } = require("../data/carrito.data");
const { generarCliente } = require("../data/cliente.data");
const { generarComunidad} = require("../data/comunidad.data");
const { generarDelivery } = require("../data/delivery.data");
const { generarDepartamento } = require("../data/departamento.data");
const { generarImagen } = require("../data/imagen.data");
const { generarMunicipio } = require("../data/municipio.data");
const { generarNotificacion} = require("../data/notificacion.data");
const { generarProducto } = require("../data/producto.data");
const { generarPromocion} = require("../data/promocion.data");
const { generarProvincia } = require("../data/provincia.data");
const { generarResenias } = require("../data/resenia.data");
const { generarAniade } = require("../data/aniade.data");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    const departamentoData = await generarDepartamento();
    await queryInterface.bulkInsert("departamento", departamentoData);
    const provinciaData = await generarProvincia();
    await queryInterface.bulkInsert("provincia", provinciaData);
    const municipioData = await generarMunicipio();
    await queryInterface.bulkInsert("municipio", municipioData);
    const comunidadData = await generarComunidad();
    await queryInterface.bulkInsert("comunidad", comunidadData);

    
    const administradorData = await generarAdministrador();
    await queryInterface.bulkInsert("administrador", administradorData);
    
    const clienteData = await generarCliente();
    await queryInterface.bulkInsert("cliente", clienteData);
    const carritoData = await generarCarrito();
    await queryInterface.bulkInsert("carrito", carritoData);

    const deliveryData = await generarDelivery();
    await queryInterface.bulkInsert("delivery", deliveryData);
    const artesanoData = await generarArtesano();
    await queryInterface.bulkInsert("artesano", artesanoData);
    const promocionData = await generarPromocion();
    await queryInterface.bulkInsert("promocion", promocionData);
    const notificacionData = await generarNotificacion();
    await queryInterface.bulkInsert("notificacion", notificacionData);

    
    const productoData = await generarProducto();
    await queryInterface.bulkInsert("producto", productoData);
    const imagenData = await generarImagen();
    await queryInterface.bulkInsert("imagen", imagenData);

    const reseniaData = await generarResenias();
    await queryInterface.bulkInsert("resenia", reseniaData);
    const aniadeData = await generarAniade();
    await queryInterface.bulkInsert("aniade", aniadeData);


  
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete("aniade", null);
    await queryInterface.bulkDelete("resenia", null);

    await queryInterface.bulkDelete("imagen", null);
    await queryInterface.bulkDelete("producto", null);
    await queryInterface.bulkDelete("notificacion", null);
    await queryInterface.bulkDelete("promocion", null);
    
    await queryInterface.bulkDelete("administrador", null);
    await queryInterface.bulkDelete("carrito", null);
    await queryInterface.bulkDelete("cliente", null);
    await queryInterface.bulkDelete("delivery", null);
    await queryInterface.bulkDelete("artesano", null);

    await queryInterface.bulkDelete("comunidad", null);
    await queryInterface.bulkDelete("municipio", null);
    await queryInterface.bulkDelete("provincia", null);
    await queryInterface.bulkDelete("departamento", null);



    
  },
};
