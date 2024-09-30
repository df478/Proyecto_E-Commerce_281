const { es } = require("@faker-js/faker");
const Joi = require("joi");

const id_usuario = Joi.number().integer();
const nombre_usuario = Joi.string().min(3).max(50);
const email_usuario = Joi.string().email();
const password_usuario = Joi.string()
  .min(8)
  .max(20)
  .pattern(new RegExp("(?=.*[a-z])"))
  .pattern(new RegExp("(?=.*[A-Z])"))
  .pattern(new RegExp("(?=.*[0-9])"))
  .pattern(new RegExp("(?=.*[!@#$%^&*])"));
const tipo_usuario = Joi.string().valid("artesano");
const especialidad = Joi.string().min(2).max(50);
const calificacion = Joi.number().integer();
const fecha_registro = Joi.date();
const celular = Joi.number().integer().min(10000000).message('celular debe tener min 8 dígitos');
const id_comunidad = Joi.number().integer();

const crearArtesanoSchema = Joi.object({
  nombre_usuario: nombre_usuario.required(),
  email_usuario: email_usuario.required(),
  password_usuario: password_usuario.required(),
  tipo_usuario: tipo_usuario.required(),
  especialidad: especialidad.required(),
  
  celular:celular.required(),
  id_comunidad: id_comunidad.required()
});

const actualizarArtesanoSchema = Joi.object({
  nombre_usuario: nombre_usuario,
  email_usuario: email_usuario,
  password_usuario: password_usuario,
  especialidad: especialidad,
  calificacion: calificacion,
  id_comunidad: id_comunidad,
  tipo_usuario: tipo_usuario,
  celular: celular,
  id_comunidad: id_comunidad
});

const obtenerArtesanoSchema = Joi.object({
  id_usuario: id_usuario.required(),
});

module.exports = {
  crearArtesanoSchema,
  actualizarArtesanoSchema,
  obtenerArtesanoSchema,
};
