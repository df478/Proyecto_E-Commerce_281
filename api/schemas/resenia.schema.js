const Joi = require('joi');

const id_resenia = Joi.number().integer().required();
const id_producto = Joi.number().integer();
const id_cliente = Joi.number().integer();
const descripcion_resenia = Joi.string();
const fecha_resenia = Joi.date();


const creaResenia = Joi.object({
    id_resenia: id_resenia,
    id_producto: id_producto,
    id_cliente: id_cliente,
    descripcion_resenia: descripcion_resenia,
    fecha_resenia: fecha_resenia    
});


const ActualizaResenia = Joi.object({
    id_producto: id_producto,
    id_cliente: id_cliente,
    descripcion_resenia: descripcion_resenia,
    fecha_resenia: fecha_resenia
});

const ObtenResenia = Joi.object({
    id_resenia: id_resenia.required()
});


module.exports = {
    creaResenia,
    ActualizaResenia,
    ObtenResenia
};   