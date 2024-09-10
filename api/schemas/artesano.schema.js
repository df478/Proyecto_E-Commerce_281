const Joi = require('joi');

const id_usuario = Joi.number().integer();
const nombre_usuario = Joi.string().min(3).max(50);
const email_usuario = Joi.string().email();
const password_usuario = Joi.string().min(8).max(20);
const especialidad = Joi.string().min(2).max(50);
const calificacion = Joi.number().integer();
const id_comunidad = Joi.number().integer();

const crearArtesanoSchema = Joi.object({
    nombre_usuario: nombre_usuario.required(),  
    email_usuario: email_usuario.required(),
    password_usuario: password_usuario.required(),
})

const actualizarArtesanoSchema = Joi.object({
    nombre_usuario: nombre_usuario,  
    email_usuario: email_usuario,
    password_usuario: password_usuario,
    especialidad: especialidad,
    calificacion: calificacion,
    id_comunidad: id_comunidad,
})

const obtenerArtesanoSchema = Joi.object({
    id_usuario: id_usuario.required()
})

module.exports = {
    crearArtesanoSchema,
    actualizarArtesanoSchema,
    obtenerArtesanoSchema
}
