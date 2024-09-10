const Joi = require('joi');

const id_usuario = Joi.number().integer();
const nombre_usuario = Joi.string().min(3).max(50);
const email_usuario = Joi.string().email();
const password_usuario = Joi.string().min(8).max(20).pattern(new RegExp('(?=.*[a-z])')).pattern(new RegExp('(?=.*[A-Z])')).pattern(new RegExp('(?=.*[0-9])')).pattern(new RegExp('(?=.*[!@#$%^&*])'))

const crearAdministradorSchema = Joi.object({
    nombre_usuario: nombre_usuario.required(),  
    email_usuario: email_usuario.required(),
    password_usuario: password_usuario.required(),
})

const actualizarAdministradorSchema = Joi.object({
    nombre_usuario: nombre_usuario,  
    email_usuario: email_usuario,
    password_usuario: password_usuario,
})

const obtenerAdministradorSchema = Joi.object({
    id_usuario: id_usuario.required()
})

module.exports = {
    crearAdministradorSchema,
    actualizarAdministradorSchema,
    obtenerAdministradorSchema
}
