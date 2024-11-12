const Joi = require('joi');

const id_tiene = Joi.number().integer();
const id_pedido = Joi.number().integer();
const id_notificacion = Joi.number().integer();
const  fecha_tiene = Joi.date().iso(); // YYYY-MM-DD

const crearTieneSchema = Joi.object({
    id_pedido:id_pedido.required(),
    id_notificacion:id_notificacion.required(),
    fecha_tiene: fecha_tiene.required()
})

const actualizarTieneSchema = Joi.object({
    id_pedido:id_pedido,
    id_notificacion:id_notificacion,
    fecha_tiene:fecha_tiene
})

const obtenerTieneSchema = Joi.object({
    id_tiene: id_tiene.required(),
})

module.exports = {
    crearTieneSchema,
    actualizarTieneSchema,
    obtenerTieneSchema
}

