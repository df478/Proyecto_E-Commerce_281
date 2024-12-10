const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
  let notificaciones = [];
  const notificacionData = [
    { descripcion_notificacion: 'Tu pedido ha sido confirmado', tipo_notificacion: 'Pedido Confirmado' },
    { descripcion_notificacion: 'Tu producto ha sido enviado',  tipo_notificacion: 'Envío de Producto' },
    { descripcion_notificacion: 'Tu pedido ha llegado a su destino', tipo_notificacion: 'Entrega Completa' },
    { descripcion_notificacion: 'Hay una promoción especial en productos artesanales', tipo_notificacion: 'Promoción' },
    { descripcion_notificacion: 'El producto que te interesa está de vuelta en stock.', tipo_notificacion: 'Reabastecimiento' },
    { descripcion_notificacion: 'Recuerda dejar una reseña sobre tu compra.', tipo_notificacion: 'Reseña Pendiente' },
    { descripcion_notificacion: 'Tu carrito tiene artículos que podrían interesarte.', tipo_notificacion: 'Recordatorio de Carrito' },
    { descripcion_notificacion: '	Nuevos productos artesanales han sido añadidos.', tipo_notificacion: 'Nuevos Productos' },
    { descripcion_notificacion: '	Nuevos pedidos artesanales han sido añadidos.', tipo_notificacion: 'Nuevos Pedidos' },
  ];
  
  for (const noticacion of notificacionData) {
    notificaciones.push({
      descripcion_notificacion: noticacion.descripcion_notificacion,
      tipo_notificacion: noticacion.tipo_notificacion,
    });
  }
  return notificaciones;
}

// Function to generate and export the data
async function generarNotificacion() {
  const notificacionData = await generate();
  return notificacionData;
}

// Export the function
module.exports = {
  generarNotificacion,
};