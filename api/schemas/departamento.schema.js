const Joi = require('joi');

const id_departamento = Joi.number().integer();
const nombre_departamento = Joi.string().min(2).max(20);


const crearDepartamentoSchema = Joi.object({
    nombre_departamento: nombre_departamento.required(),
})

const actualizarDepartamentoSchema = Joi.object({
    nombre_departamento: nombre_departamento,
}) 

const obtenerDepartamentoSchema = Joi.object({
    id_departamento: id_departamento.required(),
})

module.exports = {
    crearDepartamentoSchema,
    actualizarDepartamentoSchema,
    obtenerDepartamentoSchema
}