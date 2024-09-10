const Joi = require('joi')

const id_producto = Joi.number().integer()
const id_artesano = Joi.numbre().integer()
const id_promocion = Joi.number().integer()
const nombre_producto = Joi.string().min(2).max(50)
const precio_producto = Joi.number().positive()
const descripcion_producto = Joi.string().min(10).max(100)
const stock_producto = Joi.number().integer()

const crearProductoSchema = Joi.object({
    id_artesano:id_artesano.required(),
    id_promocion: id_promocion.required(),
    nombre_producto: nombre_producto.required(),
    precio_producto: precio_producto.required(),
    descripcion_producto: descripcion_producto.required(),
    stock_producto: stock_producto.required()
})

const actualizarProductoSchema = Joi.object({
    id_artesano:id_artesano,
    id_producto:id_promocion,
    nombre_producto: nombre_producto,
    precio_producto: precio_producto,
    descripcion_producto: descripcion_producto,
    stock_producto: stock_producto
})

const obtenerProductoSchema = Joi.object({
    id_producto: id_producto.required(),
})

module.exports = {
    crearProductoSchema,
    actualizarProductoSchema,
    obtenerProductoSchema
}