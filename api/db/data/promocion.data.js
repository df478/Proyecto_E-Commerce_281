const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
  let promociones = [];
  const promocionData = [
    { descuento_promocion: 0.15, fecha_ini: '2024-01-01', fecha_fin: '2024-01-15', nombre_promocion: 'Año Nuevo Artesanal: Descuento en Tejidos' },
    { descuento_promocion: 0.2, fecha_ini: '2024-02-10', fecha_fin: '2024-02-20', nombre_promocion: 'Carnaval de Descuentos en Máscaras' },
    { descuento_promocion: 0.1, fecha_ini: '2024-03-01', fecha_fin: '2024-03-10', nombre_promocion: 'Mes de la Mujer: Joyas Artesanales' },
    { descuento_promocion: 0.25, fecha_ini: '2024-04-05', fecha_fin: '2024-04-18', nombre_promocion: 'Semana Santa: Ofertas en Productos de Madera' },
    { descuento_promocion: 0.3, fecha_ini: '2024-05-01', fecha_fin: '2024-05-05', nombre_promocion: 'Día del Trabajador: Descuentos en Aguayos' },
    { descuento_promocion: 0.4, fecha_ini: '2024-06-10', fecha_fin: '2024-06-20', nombre_promocion: 'Oferta de Invierno: Ponchos y Chompas' },
    { descuento_promocion: 0.2, fecha_ini: '2024-07-01', fecha_fin: '2024-07-10', nombre_promocion: 'Mitad de Año: Promoción en Sombreros' },
    { descuento_promocion: 0.15, fecha_ini: '2024-08-06', fecha_fin: '2024-08-10', nombre_promocion: 'Descuentos Patrios: Artesanía Boliviana' },
    { descuento_promocion: 0.35, fecha_ini: '2024-09-10', fecha_fin: '2024-09-20', nombre_promocion: 'Primavera Artesanal: Tapices y Hamacas' },
    { descuento_promocion: 0.25, fecha_ini: '2024-10-05', fecha_fin: '2024-10-15', nombre_promocion: 'Octubre Dorado: Descuento en Joyas de Plata' },
    { descuento_promocion: 0.5, fecha_ini: '2024-11-01', fecha_fin: '2024-11-10', nombre_promocion: 'Super Black Friday: Artesanías a Mitad de Precio' },
    { descuento_promocion: 0.3, fecha_ini: '2024-12-01', fecha_fin: '2024-12-25', nombre_promocion: 'Navidad Artesanal: Promoción en Decoración' },
    { descuento_promocion: 0.45, fecha_ini: '2024-12-26', fecha_fin: '2024-12-31', nombre_promocion: 'Fin de Año: Liquidación de Productos Andinos' },
  ];
    for (const promocion of promocionData) {
      promociones.push({
        descuento_promocion: promocion.descuento_promocion,
        fecha_ini: promocion.fecha_ini,
        fecha_fin: promocion.fecha_fin,
        nombre_promocion: promocion.nombre_promocion
      });
    }
  return promociones;
}

// Function to generate and export the data
async function generarPromocion() {
  const promocionData = await generate();
  return promocionData;
}

// Export the function
module.exports = {
  generarPromocion,
};