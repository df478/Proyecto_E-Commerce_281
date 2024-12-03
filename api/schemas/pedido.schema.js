const Joi = require('joi');

const id_pedido = Joi.number().integer();
const id_carrito = Joi.number().integer();
const fecha_pedido = Joi.date();
const estado_pedido = Joi.string();
const monto_pago = Joi.number().positive();
const tipo_de_pedido = Joi.string().valid('estandar','rapido','recoger de tienda','gratuito')

const crearPedidoSchema = Joi.object({
    id_carrito: id_carrito.required(),
    fecha_pedido: fecha_pedido.required(),
    estado_pedido: estado_pedido.required(),
    monto_pago: monto_pago.required(),
    tipo_de_pedido:tipo_de_pedido.required()
});

const actualizarPedidoSchema = Joi.object({
    id_carrito: id_carrito,
    fecha_pedido: fecha_pedido,
    estado_pedido: estado_pedido,
    monto_pago: monto_pago,
    tipo_de_pedido: tipo_de_pedido
});

const obtenerPedidoSchema = Joi.object({
    id_pedido: id_pedido.required()
});

module.exports = {
    crearPedidoSchema,
    actualizarPedidoSchema,
    obtenerPedidoSchema
}
