const Joi=require('joi')

const id_notificacion = Joi.number().integer()
const descripcion_notificacion = Joi.string().min(5).max(50)
const tipo_notificacion = Joi.string().min(5).max(30)

const crearNotificacionSchema = Joi.object({
    descripcion_notificacion: descripcion_notificacion.required(),
    tipo_notificacion: tipo_notificacion.required()
})

const actualizarNotificacionSchema = Joi.object({
    descripcion_notificacion: descripcion_notificacion,
    tipo_notificacion: tipo_notificacion
})

const obtenerNotificacionSchema = Joi.object({
    id_notificacion: id_notificacion.required()
})

module.exports = {
    crearNotificacionSchema,
    actualizarNotificacionSchema,
    obtenerNotificacionSchema
}