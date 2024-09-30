const Joi = require('joi');

const id_supervisado = Joi.number().integer();
const id_administrador = Joi.number().integer();  
const id_artesano = Joi.number().integer();
const id_cliente = Joi.number().integer();
const id_delivery = Joi.number().integer();     


const crearSupervisadoSchema = Joi.object({
    id_administrador: id_administrador.required(),  
    id_artesano: id_artesano.required(),
    id_cliente: id_cliente.required(),
    id_delivery: id_delivery.required()
});


const actualizarSupervisadoSchema = Joi.object({
    id_administrador: id_administrador,  
    id_artesano: id_artesano,
    id_cliente: id_cliente,
    id_delivery: id_delivery
});


const obtenerSupervisadoSchema = Joi.object({
    id_supervisado: id_supervisado.required(),   
});

module.exports = {
    crearSupervisadoSchema,
    actualizarSupervisadoSchema,
    obtenerSupervisadoSchema
};