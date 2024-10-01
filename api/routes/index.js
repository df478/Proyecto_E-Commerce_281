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
const tieneRouter = require('./tiene.router');
const pedidoRouter = require('./pedido.router');
const productoRouter = require('./producto.router');
const promocionRouter = require('./promocion.router');
const provinciaRouter = require('./provincia.router');
const departamentoRouter = require('./departamento.router');
const reseniaRouter = require('./resenia.router');
const supervisadoRouter = require('./supervisado.router');
const usuarioRouter = require('./usuario.router');
const imagenRouter = require('./imagen.router');
const aniadeRourter = require('./aniade.router');


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
  router.use('/comunidad', comunidadRouter);
  router.use('/municipio', municipioRouter);
  router.use('/notificacion', notificacionRouter);
  router.use('/cliente', clienteRouter);
  router.use('/pago', pagoRouter);
  router.use('/entrega', entregaRouter);
  router.use('/tiene',tieneRouter);
  router.use('/pedido', pedidoRouter);
  router.use('/producto', productoRouter);
  router.use('/carrito', carritoRouter);
  router.use('/promocion',promocionRouter);
  router.use('/provincia', provinciaRouter);
  router.use('/departamento', departamentoRouter);
  router.use('/resenia', reseniaRouter);
  router.use('/supervisado', supervisadoRouter);
  router.use('/usuario', usuarioRouter);
  router.use('/imagen', imagenRouter);
  router.use('/aniade', aniadeRourter);

}

module.exports = routerApi;