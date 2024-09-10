const Joi = require ('joi');

const id_comunidad = Joi.number().integer().required();
const nombre_comunidad = Joi.number().integer();
const id_municipio = Joi.number().integer();

const crearComunidad =  Joi.object({
    id_comunidad: id_comunidad,
    nombre_comunidad: nombre_comunidad,
    id_municipio: id_municipio});

const actualizaCom = Joi.object({      
    nombre_comunidad: nombre_comunidad,
    id_municipio: id_municipio
});

const ObtenCom = Joi.object({
    id_comunidad: id_comunidad.required()
});

module.exports ={
    crearComunidad,
    actualizaCom,
    ObtenCom
};