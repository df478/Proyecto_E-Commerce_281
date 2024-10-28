const Joi = require('joi');

const id_resenia = Joi.number().integer();
const id_producto = Joi.number().integer();
const id_usuario = Joi.number().integer();
const descripcion_resenia = Joi.string().min(4).max(100);
const fecha_resenia = Joi.date();
const calificacion_resenia = Joi.number().min(1).max(5).precision(1);

const crearReseniaSchema = Joi.object({
    id_producto: id_producto.required(),
    id_usuario: id_usuario.required(),
    descripcion_resenia: descripcion_resenia.required(),
    fecha_resenia: fecha_resenia.required(),
    calificacion_resenia: calificacion_resenia.required()
});

const actualizarReseniaSchema = Joi.object({
    id_producto: id_producto,
    id_usuario: id_usuario,
    descripcion_resenia: descripcion_resenia,
    fecha_resenia: fecha_resenia,
    calificacion_resenia: calificacion_resenia
});

const obtenerReseniaSchema = Joi.object({
    id_resenia: id_resenia.required()
});

module.exports = {
    crearReseniaSchema,
    actualizarReseniaSchema,
    obtenerReseniaSchema
};
