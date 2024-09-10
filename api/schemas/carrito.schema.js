const Joi = require('joi');

const id_carrito = Joi.number().integer();

const crearCarritoSchema = Joi.object({
})

const actualizarCarritoSchema = Joi.object({
})

const obtenerCarritoSchema = Joi.object({
    id_carrito: id_carrito.required()
})

module.exports = {
    crearCarritoSchema,
    actualizarCarritoSchema,
    obtenerCarritoSchema
}
