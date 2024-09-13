const express = require('express');
const productoRouter = require('./producto.router');
const clienteRouter = require('./cliente.router');
const pedidoRouter = require('./pedido.router');
const pagoRouter = require('./pago.router');
const promocionRouter = require('./promocion.router');
const pedNotRouter = require('./ped_not(tiene).router');
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/producto', productoRouter);
  router.use('/cliente', clienteRouter);
  router.use('/pedido', pedidoRouter);
  router.use('/pago', pagoRouter);
  router.use('/promocion',promocionRouter);
  router.use('/pedNot',pedNotRouter);
}

module.exports = routerApi;