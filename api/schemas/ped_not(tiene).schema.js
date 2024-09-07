const Joi = require('joi')

const id_pedido = Joi.number().integer()
const id_notificacion = Joi.number().integer()
const  fecha_ped_not = Joi.date() // YYYY-MM-DD

const crearPed_NotSchema = Joi.object({
    id_pedido:id_pedido.required(),
    id_notificacion:id_notificacion.required(),
    fecha_ped_not: fecha_ped_not.required()
})

const actualizarPed_NotSchema = Joi.object({
    id_pedido:id_pedido,
    id_notificacion:id_notificacion,
    fecha_ped_not:fecha_ped_not
})

const obtenerPed_NotSchema = Joi.object({
    id_pedido: id_pedido.required(),
    id_notificacion: id_notificacion.required()
})

module.exports = {
    crearPed_NotSchema,
    actualizarPed_NotSchema,
    obtenerPed_NotSchema
}

