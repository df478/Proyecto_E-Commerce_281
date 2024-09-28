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
const tipo_usuario = Joi.string().valid("delivery");
const estado_delivery = Joi.string().min(2).max(50).valid("Activo","Inactivo","En camino");
const fecha_registro = Joi.date();
const celular = Joi.number().integer();

const crearDeliverySchema = Joi.object({
  nombre_usuario: nombre_usuario.required(),
  email_usuario: email_usuario.required(),
  password_usuario: password_usuario.required(),
  tipo_usuario: tipo_usuario.required(),
  fecha_registro: fecha_registro.required(),
});

const actualizarDeliverySchema = Joi.object({
  nombre_usuario: nombre_usuario,
  email_usuario: email_usuario,
  password_usuario: password_usuario,
  estado_delivery: estado_delivery,
});

const obtenerDeliverySchema = Joi.object({
  id_usuario: id_usuario.required(),
});

module.exports = {
  crearDeliverySchema,
  actualizarDeliverySchema,
  obtenerDeliverySchema,
};
