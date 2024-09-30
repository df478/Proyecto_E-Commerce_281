const Joi = require('joi');

const id_usuario = Joi.number().integer();
const nombre_usuario = Joi.string().min(3).max(50);
const email_usuario = Joi.string().email();
const password_usuario = Joi.string().min(8).max(20).pattern(new RegExp('(?=.*[a-z])')).pattern(new RegExp('(?=.*[A-Z])')).pattern(new RegExp('(?=.*[0-9])')).pattern(new RegExp('(?=.*[!@#$%^&*])'))  
const tipo_usuario = Joi.string().valid('cliente');
const fecha_registro = Joi.date();
const nro_compras = Joi.number().integer().min(0);
const celular = Joi.number().integer().min(10000000).message('celular debe tener min 8 dígitos');

const crearClienteSchema = Joi.object({
    nombre_usuario: nombre_usuario.required(),  
    email_usuario: email_usuario.required(),
    password_usuario: password_usuario.required(),
    tipo_usuario: tipo_usuario.required(),
    fecha_registro: fecha_registro.required(),
    celular:celular.required()
})

const actualizarClienteSchema = Joi.object({
    nombre_usuario: nombre_usuario,  
    email_usuario: email_usuario,
    password_usuario: password_usuario,
    tipo_usuario: tipo_usuario,
    fecha_registro: fecha_registro,
    nro_compras: nro_compras,
    celular:celular
})

const obtenerClienteSchema = Joi.object({
    id_usuario: id_usuario.required()
})

module.exports = {
    crearClienteSchema,
    actualizarClienteSchema,
    obtenerClienteSchema
}
