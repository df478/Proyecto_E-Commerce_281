const Joi = require('joi');

const id_supervisado = Joi.number().integer();
const id_usuario_admin = Joi.number().integer();  
const id_usuario_artesano = Joi.number().integer();
const id_usuario_cliente = Joi.number().integer();
const id_usuario_delivery = Joi.number().integer();     


const crearSupervisadoSchema = Joi.object({
    id_usuario_admin: id_usuario_admin.required(),  
    id_usuario_artesano: id_usuario_artesano.required(),
    id_usuario_cliente: id_usuario_cliente.required(),
    id_usuario_delivery: id_usuario_delivery.required()
});


const actualizarSupervisadoSchema = Joi.object({
    id_usuario_admin: id_usuario_admin,  
    id_usuario_artesano: id_usuario_artesano,
    id_usuario_cliente: id_usuario_cliente,
    id_usuario_delivery: id_usuario_delivery
});


const obtenerSupervisadoSchema = Joi.object({
    id_supervisado: id_supervisado.required(),   
});

module.exports = {
    crearSupervisadoSchema,
    actualizarSupervisadoSchema,
    obtenerSupervisadoSchema
};