const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");


async function generate() {
  let provincias = [];
  const provinciaData = [
    { nombre_provincia: "Cercado", id_departamento: 7 },
    { nombre_provincia: "Iténez", id_departamento: 7 },
    { nombre_provincia: "General José Ballivián", id_departamento: 7 },
    { nombre_provincia: "Mamoré", id_departamento: 7 },
    { nombre_provincia: "Marbán", id_departamento: 7 },
    { nombre_provincia: "Moxos", id_departamento: 7 },
    { nombre_provincia: "Vaca Díez", id_departamento: 7 },
    { nombre_provincia: "Yacuma", id_departamento: 7 },
    { nombre_provincia: "Belisario Boeto", id_departamento: 9 },
    { nombre_provincia: "Hernando Siles", id_departamento: 9 },
    { nombre_provincia: "Zudáñez", id_departamento: 9 },
    { nombre_provincia: "Azurduy", id_departamento: 9 },
    { nombre_provincia: "Luis Calvo", id_departamento: 9 },
    { nombre_provincia: "Nor Cinti", id_departamento: 9 },
    { nombre_provincia: "Oropeza", id_departamento: 9 },
    { nombre_provincia: "Sud Cinti", id_departamento: 9 },
    { nombre_provincia: "Tomina", id_departamento: 9 },
    { nombre_provincia: "Yamparáez", id_departamento: 9 },
    { nombre_provincia: "Arani", id_departamento: 2 },
    { nombre_provincia: "Arque", id_departamento: 2 },
    { nombre_provincia: "Ayopaya", id_departamento: 2 },
    { nombre_provincia: "Bolívar", id_departamento: 2 },
    { nombre_provincia: "Capinota", id_departamento: 2 },
    { nombre_provincia: "Carrasco", id_departamento: 2 },
    { nombre_provincia: "Chapare", id_departamento: 2 },
    { nombre_provincia: "Esteban Arze", id_departamento: 2 },
    { nombre_provincia: "Germán Jordán", id_departamento: 2 },
    { nombre_provincia: "Mizque", id_departamento: 2 },
    { nombre_provincia: "Campero", id_departamento: 2 },
    { nombre_provincia: "Punata", id_departamento: 2 },
    { nombre_provincia: "Quillacollo", id_departamento: 2 },
    { nombre_provincia: "Tapacarí", id_departamento: 2 },
    { nombre_provincia: "Tiraque", id_departamento: 2 },
    { nombre_provincia: "Iturralde", id_departamento: 1 },
    { nombre_provincia: "Aroma", id_departamento: 1 },
    { nombre_provincia: "Bautista Saavedra", id_departamento: 1 },
    { nombre_provincia: "Caranavi", id_departamento: 1 },
    { nombre_provincia: "Camacho", id_departamento: 1 },
    { nombre_provincia: "Franz Tamayo", id_departamento: 1 },
    { nombre_provincia: "Gualberto Villarroel", id_departamento: 1 },
    { nombre_provincia: "Ingavi", id_departamento: 1 },
    { nombre_provincia: "Inquisivi", id_departamento: 1 },
    { nombre_provincia: "General José Manuel Pando", id_departamento: 1 },
    { nombre_provincia: "Loayza", id_departamento: 1 },
    { nombre_provincia: "Larecaja", id_departamento: 1 },
    { nombre_provincia: "Los Andes", id_departamento: 1 },
    { nombre_provincia: "Manco Kapac", id_departamento: 1 },
    { nombre_provincia: "Muñecas", id_departamento: 1 },
    { nombre_provincia: "Nor Yungas", id_departamento: 1 },
    { nombre_provincia: "Omasuyos", id_departamento: 1 },
    { nombre_provincia: "Pacajes", id_departamento: 1 },
    { nombre_provincia: "Murillo", id_departamento: 1 },
    { nombre_provincia: "Sud Yungas", id_departamento: 1 },
    { nombre_provincia: "Sabaya", id_departamento: 6 },
    { nombre_provincia: "Carangas", id_departamento: 6 },
    { nombre_provincia: "Abaroa", id_departamento: 6 },
    { nombre_provincia: "Ladislao Cabrera", id_departamento: 6 },
    { nombre_provincia: "Litoral de Atacama", id_departamento: 6 },
    { nombre_provincia: "Nor Carangas", id_departamento: 6 },
    { nombre_provincia: "Dalence", id_departamento: 6 },
    { nombre_provincia: "Poopó", id_departamento: 6 },
    { nombre_provincia: "Mejillones", id_departamento: 6 },
    { nombre_provincia: "Sajama", id_departamento: 6 },
    { nombre_provincia: "San Pedro de Totora", id_departamento: 6 },
    { nombre_provincia: "Saucarí", id_departamento: 6 },
    { nombre_provincia: "Sebastián Pagador", id_departamento: 6 },
    { nombre_provincia: "Sud Carangas", id_departamento: 6 },
    { nombre_provincia: "Tomás Barrón", id_departamento: 6 },
    { nombre_provincia: "Abuná", id_departamento: 8 },
    { nombre_provincia: "General Federico Román", id_departamento: 8 },
    { nombre_provincia: "Madre de Dios", id_departamento: 8 },
    { nombre_provincia: "Manuripi", id_departamento: 8 },
    { nombre_provincia: "Nicolás Suárez", id_departamento: 8 },
    { nombre_provincia: "Alonso de Ibáñez", id_departamento: 5 },
    { nombre_provincia: "Quijarro", id_departamento: 5 },
    { nombre_provincia: "Bernardino Bilbao", id_departamento: 5 },
    { nombre_provincia: "Charcas", id_departamento: 5 },
    { nombre_provincia: "Chayanta", id_departamento: 5 },
    { nombre_provincia: "Cornelio Saavedra", id_departamento: 5 },
    { nombre_provincia: "Daniel Campos", id_departamento: 5 },
    { nombre_provincia: "Enrique Baldivieso", id_departamento: 5 },
    { nombre_provincia: "Linares", id_departamento: 5 },
    { nombre_provincia: "Modesto Omiste", id_departamento: 5 },
    { nombre_provincia: "Nor Chichas", id_departamento: 5 },
    { nombre_provincia: "Nor Lípez", id_departamento: 5 },
    { nombre_provincia: "Rafael Bustillo", id_departamento: 5 },
    { nombre_provincia: "Sud Chichas", id_departamento: 5 },
    { nombre_provincia: "Sud Lípez", id_departamento: 5 },
    { nombre_provincia: "Tomás Frías", id_departamento: 5 },
    { nombre_provincia: "Andrés Ibáñez", id_departamento: 3 },
    { nombre_provincia: "Ángel Sandóval", id_departamento: 3 },
    { nombre_provincia: "Chiquitos", id_departamento: 3 },
    { nombre_provincia: "Cordillera", id_departamento: 3 },
    { nombre_provincia: "Florida", id_departamento: 3 },
    { nombre_provincia: "Germán Busch", id_departamento: 3 },
    { nombre_provincia: "Guarayos", id_departamento: 3 },
    { nombre_provincia: "Ichilo", id_departamento: 3 },
    { nombre_provincia: "Norte Integrado", id_departamento: 3 },
    { nombre_provincia: "Sara", id_departamento: 3 },
    { nombre_provincia: "Suroeste", id_departamento: 3 }
    ];
    for (const provincia   of provinciaData ) {
      provincias.push({
        nombre_provincia: provincia.nombre_provincia,
        id_departamento: provincia.id_departamento
      });
    }

  return provincias;
}

// Function to generate and export the data
async function generarProvincia() {
  const provinciaData = await generate();
  return provinciaData;
}

// Export the function
module.exports = {
  generarProvincia,
};