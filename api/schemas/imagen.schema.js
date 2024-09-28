const Joi = require("joi");

const id_imagen = Joi.number().integer();
const url_imagen = Joi.string().uri()
const id_producto = Joi.number().integer();

const crearImagenSchema = Joi.object({
    url_imagen: url_imagen.required(),
    id_producto: id_producto.required()
  });
  const actualizarImagenSchema = Joi.object({
    url_imagen: url_imagen,
    id_producto: id_promocion,
})

const obtenerImagenSchema = Joi.object({
    id_imagen: id_imagen.required(),
})

module.exports = {
    crearImagenSchema,
    actualizarImagenSchema,
    obtenerImagenSchema
}