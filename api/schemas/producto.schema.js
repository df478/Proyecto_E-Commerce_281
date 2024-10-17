const Joi = require('joi')

const id_producto = Joi.number().integer()
const id_artesano = Joi.number().integer()
const id_promocion = Joi.number().integer()
const nombre_producto = Joi.string().min(2).max(50)
const precio_producto = Joi.number().positive()
const descripcion_producto = Joi.string().min(10).max(100)
const stock_producto = Joi.number().integer()
const categoria_producto = Joi.string().min(2).max(50)
const peso_producto = Joi.number().positive();
const largo_producto= Joi.number().positive();
const ancho_producto= Joi.number().positive();
const alto_producto= Joi.number().positive();
const envio_gratuito = Joi.number().integer();

const crearProductoSchema = Joi.object({
    id_artesano:id_artesano.required(),
    nombre_producto: nombre_producto.required(),
    precio_producto: precio_producto.required(),
    descripcion_producto: descripcion_producto.required(),
    stock_producto: stock_producto.required(),
    categoria_producto: categoria_producto.required(),
    peso_producto: peso_producto.required(),
    largo_producto: largo_producto.required(),
    ancho_producto:ancho_producto.required(),
    alto_producto: alto_producto.required(),
    envio_gratuito: envio_gratuito.required()
})

const actualizarProductoSchema = Joi.object({
    id_artesano:id_artesano,
    id_producto:id_promocion,
    nombre_producto: nombre_producto,
    precio_producto: precio_producto,
    descripcion_producto: descripcion_producto,
    stock_producto: stock_producto,
    categoria_producto: categoria_producto,
    peso_producto: peso_producto,
    largo_producto: largo_producto,
    ancho_producto:ancho_producto,
    alto_producto: alto_producto,
    envio_gratuito: envio_gratuito
})

const obtenerProductoSchema = Joi.object({
    id_producto: id_producto.required(),
})

module.exports = {
    crearProductoSchema,
    actualizarProductoSchema,
    obtenerProductoSchema
}