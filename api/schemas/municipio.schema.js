const Joi = require ('joi');

const id_municipio = Joi.id_number().integera().require();
const nombre_municipio = Joi.string().max(100);
const id_provincia = Joi.id_number.integer();
   

constCreaMuni = Joi.object({
    id_municipio: id_municipio,
    nombre_municipio: nombre_municipio,
    id_provincia: id_provincia
});

const actualizaMun = Joi.object({
    nombre_municipio: nombre_municipio,
    id_provincia: id_provincia
});

const ObtenMun = Joi.object({
    id_municipio: id_municipio.required()
});


module.exports = {
    constCreaMuni,
    actualizaMun,
    ObtenMun
}