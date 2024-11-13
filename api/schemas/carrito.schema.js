const Joi = require('joi');

const id_carrito = Joi.number().integer();
const id_usuario = Joi.number().integer();

const crearCarritoSchema = Joi.object({
    id_usuario: id_usuario.required(),
})

const actualizarCarritoSchema = Joi.object({
    id_usuario:id_usuario,
})

const obtenerCarritoSchema = Joi.object({
    id_carrito: id_carrito.required()
})

module.exports = {
    crearCarritoSchema,
    actualizarCarritoSchema,
    obtenerCarritoSchema
}
