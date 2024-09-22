const Joi = require('joi');


const id_usuario = Joi.number().integer();  
const id_usuario2 = Joi.number().integer(); 


const crearSupervisadoSchema = Joi.object({
    id_usuario: id_usuario.required(),
    id_usuario2: id_usuario2.required()
});


const actualizarSupervisadoSchema = Joi.object({
    id_usuario: id_usuario,      
    id_usuario2: id_usuario2    
});


const obtenerSupervisadoSchema = Joi.object({
    id_usuario: id_usuario.required(),    
    id_usuario2: id_usuario2.required()   
});

module.exports = {
    crearSupervisadoSchema,
    actualizarSupervisadoSchema,
    obtenerSupervisadoSchema
};