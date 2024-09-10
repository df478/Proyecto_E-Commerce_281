const Joi = require ('joi');

const id_comunidad = Joi.number().integer();
const nombre_comunidad = Joi.string().min(3).max(5);
const id_municipio = Joi.number().integer();

const crearComunidadSchema =  Joi.object({
    nombre_comunidad: nombre_comunidad.required(),
    id_municipio: id_municipio.required()
});

const actualizarComunidadSchema = Joi.object({      
    nombre_comunidad: nombre_comunidad,
    id_municipio: id_municipio
});

const obtenerComunidadSchema = Joi.object({
    id_comunidad: id_comunidad.required()
});

module.exports ={
    crearComunidadSchema,
    actualizarComunidadSchema,
    obtenerComunidadSchema
};