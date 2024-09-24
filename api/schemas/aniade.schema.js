const Joi = require('joi');

const id_aniade = Joi.number().integer();
const id_producto = Joi.number().integer();
const id_carrito = Joi.number().integer();
const id_cliente = Joi.number().integer();
const cantidad = Joi.number().integer();

const crearAniadeSchema = Joi.object({
    id_producto: id_producto.required(),
    id_carrito: id_carrito.required(),
    id_cliente: id_cliente.required(),
    cantidad: cantidad.required(),
});

const actualizarAniadeSchema = Joi.object({
    id_producto: id_producto,
    id_carrito: id_carrito,
    id_cliente: id_cliente,
    cantidad: cantidad,
}); 

const obtenerAniadeSchema = Joi.object({
    id_aniade: id_aniade.required(),
});

module.exports = {
    crearAniadeSchema,
    actualizarAniadeSchema,
    obtenerAniadeSchema,
};
