const Joi = require('joi');

const id_pago = Joi.number().integer();
const id_pedido = Joi.number().integer();
const id_artesano = Joi.number().integer();
const id_cliente = Joi.number().integer();
const id_delivery = Joi.number().integer();
const fecha_pago = Joi.date();

const crearPagoSchema = Joi.object({
    id_pedido: id_pedido.required(),
    id_artesano: id_artesano.required(),
    id_cliente: id_cliente.required(),
    id_delivery: id_delivery.required(),
    fecha_pago: fecha_pago.required(),
});

const actualizarPagoSchema = Joi.object({
    id_pedido: id_pedido,
    id_artesano: id_artesano,
    id_cliente: id_cliente,
    id_delivery: id_delivery,
    fecha_pago: fecha_pago,
});

const obtenerPagoSchema = Joi.object({
    id_pago: id_pago.required()
});

module.exports = {
    crearPagoSchema,
    actualizarPagoSchema,
    obtenerPagoSchema
}
