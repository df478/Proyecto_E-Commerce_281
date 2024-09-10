const Joi = require('joi');

const id_carrito = Joi.number().integer();

const crearArtesanoSchema = Joi.object({
})

const actualizarArtesanoSchema = Joi.object({
})

const obtenerArtesanoSchema = Joi.object({
    id_carrito: id_carrito.required()
})

module.exports = {
    crearArtesanoSchema,
    actualizarArtesanoSchema,
    obtenerArtesanoSchema
}
