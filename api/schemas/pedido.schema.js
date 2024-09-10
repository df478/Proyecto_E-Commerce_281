const Joi = require('joi');

const id_pedido = Joi.number().integer();
const id_carrito = Joi.number().integer();
const fecha_pedido = Joi.date();
const estado_pedido = Joi.string().valid('pendiente', 'procesado', 'enviado', 'entregado', 'cancelado');
const monto_pago = Joi.number().positive();

const crearPedidoSchema = Joi.object({
    id_carrito: id_carrito.required(),
    fecha_pedido: fecha_pedido.required(),
    estado_pedido: estado_pedido.required(),
    monto_pago: monto_pago.required(),
});

const actualizarPedidoSchema = Joi.object({
    id_carrito: id_carrito,
    fecha_pedido: fecha_pedido,
    estado_pedido: estado_pedido,
    monto_pago: monto_pago,
});

const obtenerPedidoSchema = Joi.object({
    id_pedido: id_pedido.required()
});

module.exports = {
    crearPedidoSchema,
    actualizarPedidoSchema,
    obtenerPedidoSchema
}
