const Joi = require('joi');


const id_usuario = Joi.number().integer().required();  
const id_usuario2 = Joi.number().integer().required(); 


const crearUsuNorAdminSchema = Joi.object({
    id_usuario: id_usuario,      
    id_usuario2: id_usuario2    
});


const actualizarUsuNorAdminSchema = Joi.object({
    id_usuario: id_usuario,      
    id_usuario2: id_usuario2    
});


const obtenerUsuNorAdminSchema = Joi.object({
    id_usuario: id_usuario.required(),    
    id_usuario2: id_usuario2.required()   
});

module.exports = {
    crearUsuNorAdminSchema,
    actualizarUsuNorAdminSchema,
    obtenerUsuNorAdminSchema
};
       