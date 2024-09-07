const Joi = require('joi');

const id_provincia = Joi.number().integer();
const nombre_provincia = Joi.string().min(1).max(30);
const id_departamento = Joi.number().integer();

const crearProvinciaSchema = Joi.object({
    nombre_provincia: nombre_provincia.required(),  
})

const actualizarProvinciaSchema = Joi.object({
    nombre_provincia: nombre_provincia,
    id_departamento: id_departamento,
})

const obtenerProvinciaSchema = Joi.object({
    id_provincia: id_provincia.required(),
})

module.exports = {
    crearArtesanoSchema,
    actualizarArtesanoSchema,
    obtenerArtesanoSchema
}
