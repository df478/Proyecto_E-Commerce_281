const Joi = require('joi');

const id_producto = Joi.number().integer();
const id_carrito = Joi.number().integer();
const id_cliente = Joi.number().integer();
const cantidad = Joi.number().integer();

const crearProPromCliCarSchema = Joi.object({
    id_producto: id_producto.required(),
    id_carrito: id_carrito.required(),
    id_cliente: id_cliente.required(),
    cantidad: cantidad.required(),
});

const actualizarProPromCliCarSchema = Joi.object({
    id_producto: id_producto,
    id_carrito: id_carrito,
    id_cliente: id_cliente,
    cantidad: cantidad,
}); 

const obtenerProPromCliCarSchema = Joi.object({
    id_producto: id_producto.required(),
    id_carrito: id_carrito.required(),
    id_cliente: id_cliente.required(),
});

module.exports = {
    crearProPromCliCarSchema,
    actualizarProPromCliCarSchema,
    obtenerProPromCliCarSchema,
};