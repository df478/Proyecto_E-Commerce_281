const Joi = require('joi');

const id_pedido = Joi.number().integer();
const id_cliente = Joi.number().integer();
const id_delivery = Joi.number().integer();
const estado_entrega = Joi.string().min(2).max(20);
const fecha_entrega = Joi.date()

const crearPed_Cli_DelSchema = Joi.object({
    id_delivery: id_delivery.required(),  
    id_cliente: id_cliente.required(),
    id_pedido: id_pedido.required(),
    estado_entrega: estado_entrega.required(),
    fecha_entrega: fecha_entrega.required(),
})

const actualizarPed_Cli_DelSchema = Joi.object({
    id_delivery: id_delivery,  
    id_cliente: id_cliente,
    id_pedido: id_pedido,
    estado_entrega: estado_entrega,
    fecha_entrega: fecha_entrega,
})

const obtenerPed_Cli_DelSchema = Joi.object({
    id_delivery: id_delivery.required(),  
    id_cliente: id_cliente.required(),
    id_pedido: id_pedido.required(),
})
module.exports = {
    crearPed_Cli_DelSchema,
    actualizarPed_Cli_DelSchema,
    obtenerPed_Cli_DelSchema
}