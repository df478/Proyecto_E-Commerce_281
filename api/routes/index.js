const express = require('express');
const productoRouter = require('./producto.router');
const clienteRouter = require('./cliente.router');
const pedidoRouter = require('./pedido.router');
const pagoRouter = require('./pago.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/producto', productoRouter);
  router.use('/cliente', clienteRouter);
  router.use('/pedido', pedidoRouter);
  router.use('/pago', pagoRouter);
}

module.exports = routerApi;