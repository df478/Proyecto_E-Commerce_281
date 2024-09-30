const express = require('express');


const administradorRouter = require('./administrador.router');
const clienteRouter = require('./cliente.router');
const artesanoRouter = require('./artesano.router');
const deliveryRouter = require('./delivery.router');
const carritoRouter = require('./carrito.router');
const comunidadRouter = require('./comunidad.router');
const municipioRouter = require('./municipio.router');
const notificacionRouter = require('./notificacion.router')
const pagoRouter = require('./pago.router');
const entregaRouter = require('./entrega.router');
//const pedNotRouter = require('./ped_not(tiene).router');
const pedidoRouter = require('./pedido.router');
//const proPromCliCarRouter = require('./pro_prom_cli_car.router');
const productoRouter = require('./producto.router');
const promocionRouter = require('./promocion.router');
const provinciaRouter = require('./provincia.router');
const departamentoRouter = require('./departamento.router');
const reseniaRouter = require('./resenia.router');
const supervisadoRouter = require('./supervisado.router');
const usuarioRouter = require('./usuario.router');
const imagenRouter = require('./imagen.router');
const aniadeRouter = require('./aniade.router');

//authentication
const authRouter = require('./auth.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/administrador', administradorRouter);
  router.use('/artesano', artesanoRouter);
  router.use('/cliente', clienteRouter);
  router.use('/delivery', deliveryRouter);
  router.use('/carrito', carritoRouter);
  router.use('/comunidad', comunidadRouter);
  router.use('/municipio', municipioRouter);
  router.use('/notificiacion', notificacionRouter);
  router.use('/cliente', clienteRouter);
  router.use('/pago', pagoRouter);
  router.use('/entrega', entregaRouter);
  router.use('/aniade', aniadeRouter);
  //router.use('/pedNot',pedNotRouter);
  router.use('/pedido', pedidoRouter);
  //router.use('/proPromCliCar', proPromCliCarRouter);
  router.use('/producto', productoRouter);
  router.use('/promocion',promocionRouter);
  router.use('/provincia', provinciaRouter);
  router.use('/departamento', departamentoRouter);
  router.use('/resenia', reseniaRouter);
  router.use('/supervisado', supervisadoRouter);
  router.use('/usuario', usuarioRouter);
  router.use('/imagen', imagenRouter);


}

module.exports = routerApi;