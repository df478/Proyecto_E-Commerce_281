const Joi = require ('joi');

const id_municipio = Joi.id_number().integer();
const nombre_municipio = Joi.string().min(2).max(50);
const id_provincia = Joi.id_number.integer();

const crearMunicipioSchema = Joi.object({
    nombre_municipio: nombre_municipio.required(),
    id_provincia: id_provincia.require()
});

const actualizaMunicipioSchema = Joi.object({
    nombre_municipio: nombre_municipio,
    id_provincia: id_provincia
});

const obtenerMunicipioSchema = Joi.object({
    id_municipio: id_municipio.required()
});


module.exports = {
    crearMunicipioSchema,
    actualizaMunicipioSchema,
    obtenerMunicipioSchema
}