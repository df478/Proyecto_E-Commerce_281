const Joi = require('joi');

const id_aniade = Joi.number().integer();
const id_producto = Joi.number().integer();
const id_carrito = Joi.number().integer();
const cantidad = Joi.number().integer();
const artesano_confirm = Joi.boolean();
const delivery_confirm = Joi.boolean();

const crearAniadeSchema = Joi.object({
    id_producto: id_producto.required(),
    id_carrito: id_carrito.required(),
    cantidad: cantidad.required(),
});

const actualizarAniadeSchema = Joi.object({
    id_producto: id_producto,
    id_carrito: id_carrito,
    cantidad: cantidad,
    artesano_confirm : artesano_confirm,
    delivery_confirm : delivery_confirm,
}); 

const obtenerAniadeSchema = Joi.object({
    id_aniade: id_aniade.required(),
});

module.exports = {
    crearAniadeSchema,
    actualizarAniadeSchema,
    obtenerAniadeSchema,
};
