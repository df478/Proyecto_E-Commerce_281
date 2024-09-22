const Joi = require('joi')

const id_pedido = Joi.number().integer()
const id_notificacion = Joi.number().integer()
const  fecha_ped_not = Joi.date() // YYYY-MM-DD

const crearTieneSchema = Joi.object({
    id_pedido:id_pedido.required(),
    id_notificacion:id_notificacion.required(),
    fecha_ped_not: fecha_ped_not.required()
})

const actualizarTieneSchema = Joi.object({
    id_pedido:id_pedido,
    id_notificacion:id_notificacion,
    fecha_ped_not:fecha_ped_not
})

const obtenerTieneSchema = Joi.object({
    id_pedido: id_pedido.required(),
    id_notificacion: id_notificacion.required()
})

module.exports = {
    crearTieneSchema,
    actualizarTieneSchema,
    obtenerTieneSchema
}

