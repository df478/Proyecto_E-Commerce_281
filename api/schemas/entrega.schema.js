const Joi = require('joi');

const id_entrega = Joi.number().integer();
const id_pedido = Joi.number().integer();
const id_cliente = Joi.number().integer();
const id_delivery = Joi.number().integer();
const estado_entrega = Joi.string().min(2).max(20);
const fecha_entrega = Joi.date()

const crearEntregaSchema = Joi.object({
    id_cliente: id_cliente.required(),
    id_pedido: id_pedido.required(),
    id_delivery: id_delivery.required(),
    estado_entrega: estado_entrega.required()
})

const actualizarEntregaSchema = Joi.object({
    id_delivery: id_delivery,  
    id_cliente: id_cliente,
    id_pedido: id_pedido,
    estado_entrega: estado_entrega,
    fecha_entrega: fecha_entrega,
})

const obtenerEntregaSchema = Joi.object({
    id_entrega: id_entrega.required(),  
   
})
module.exports = {
    crearEntregaSchema,
    actualizarEntregaSchema,
    obtenerEntregaSchema
}