const Joi = require('joi')

const id_promocion = Joi.number().integer()
const descuento_promocion = Joi.number().min(0).max(100) // Asumimos que es un porcentaje entre 0 y 100
const fecha_ini = Joi.date().iso() // Fecha en formata YYYY-MM-DD
const fecha_fin = Joi.date().iso().min(Joi.ref('fecha_ini')) // fecha_fin debe ser posterior a fecha_ini
const nombre_promocion = Joi.string().min(3).max(50)

const crearPromocionSchema = Joi.object({
    descuento_promocion: descuento_promocion.required(),
    fecha_ini: fecha_ini.required(),
    fecha_fin: fecha_fin.required(),
    nombre_promocion: nombre_promocion.required(),
})

const actualizarPromocionSchema = Joi.object({
    descuento_promocion: descuento_promocion,
    fecha_ini: fecha_ini,
    fecha_fin: fecha_fin,
    nombre_promocion: nombre_promocion,
})

const obtenerPromocionSchema = Joi.object({
    id_promocion: id_promocion.required(),
})
module.exports = {
    crearPromocionSchema,
    actualizarPromocionSchema,
    obtenerPromocionSchema,
}
