const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");


async function generate() {
  let comunidades = [];
  const comunidadData=[
    {
        nombre_comunidad: "1.º de mayo",
        id_municipio: 90 },
    {
        nombre_comunidad: "La Ceja",
        id_municipio: 90 },
    {
        nombre_comunidad: "16 de julio",
        id_municipio: 90 },
    {
        nombre_comunidad: "Alto Lima",
        id_municipio: 90 },
    {
        nombre_comunidad: "Ballivián",
        id_municipio: 90 },
    {
        nombre_comunidad: "Complejo",
        id_municipio: 90 },
    {
        nombre_comunidad: "Convifag",
        id_municipio: 90 },
    {
        nombre_comunidad: "Ciudad Satélite",
        id_municipio: 90 },
    {
        nombre_comunidad: "El Kenko",
        id_municipio: 90 },
    {
        nombre_comunidad: "Germán Busch",
        id_municipio: 90 },
    {
        nombre_comunidad: "Kollpani",
        id_municipio: 90 },
    {
        nombre_comunidad: "Mercedario",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Ingenio",
        id_municipio: 90 },
    {
        nombre_comunidad: "Nuevos Horizontes",
        id_municipio: 90 },
    {
        nombre_comunidad: "Cupilupaca",
        id_municipio: 90 },
    {
        nombre_comunidad: "Río Seco",
        id_municipio: 90 },
    {
        nombre_comunidad: "Senkata",
        id_municipio: 90 },
    {
        nombre_comunidad: "Puente Vela",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Santa Rosa",
        id_municipio: 90 },
    {
        nombre_comunidad: "Santiago I",
        id_municipio: 90 },
    {
        nombre_comunidad: "Santiago II",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Adela",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Alemania",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Exaltación",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Dolores",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Ingavi",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Bolívar \"E\"",
        id_municipio: 90 },
    {
        nombre_comunidad: "Villa Bolívar \"B\"",
        id_municipio: 90 },
    {
        nombre_comunidad: "Achachicala",
        id_municipio: 100 },
    {
        nombre_comunidad: "Calacoto",
        id_municipio: 100 },
    {
        nombre_comunidad: "Chicani",
        id_municipio: 100 },
    {
        nombre_comunidad: "Chijini",
        id_municipio: 100 },
    {
        nombre_comunidad: "Chualluma",
        id_municipio: 100 },
    {
        nombre_comunidad: "Garita de Lima",
        id_municipio: 100 },
    {
        nombre_comunidad: "Irpavi",
        id_municipio: 100 },
    {
        nombre_comunidad: "Mallasa",
        id_municipio: 100 },
    {
        nombre_comunidad: "Miraflores (La Paz)",
        id_municipio: 100 },
    {
        nombre_comunidad: "Munaypata",
        id_municipio: 100 },
    {
        nombre_comunidad: "Obrajes",
        id_municipio: 100 },
    {
        nombre_comunidad: "Pampahasi",
        id_municipio: 100 },
    {
        nombre_comunidad: "Pura Pura",
        id_municipio: 100 },
    {
        nombre_comunidad: "San Jorge (La Paz)",
        id_municipio: 100 },
    {
        nombre_comunidad: "San Miguel (La Paz)",
        id_municipio: 100 },
    {
        nombre_comunidad: "Següencoma",
        id_municipio: 100 },
    {
        nombre_comunidad: "Sopocachi",
        id_municipio: 100 },
    {
        nombre_comunidad: "Villa Fátima (La Paz)",
        id_municipio: 100 },
    {
        nombre_comunidad: "Villa Victoria (La Paz)",
        id_municipio: 100 },
    {
        nombre_comunidad: "La Comuna Tunari",
        id_municipio: 25 },
    {
        nombre_comunidad: "La Comuna Molle",
        id_municipio: 25 },
    {
        nombre_comunidad: "La Comuna Alejo Calatayud",
        id_municipio: 25 },
    {
        nombre_comunidad: "La Comuna Valle Hermoso",
        id_municipio: 25 },
    {
        nombre_comunidad: "La Comuna Itocta",
        id_municipio: 25 },
    {
        nombre_comunidad: "La Comuna Adela Zamudio",
        id_municipio: 25 },
    {
        nombre_comunidad: "25 de Junio",
        id_municipio: 92 },
    {
        nombre_comunidad: "27 de Mayo",
        id_municipio: 92 },
    {
        nombre_comunidad: "5 de Noviembre",
        id_municipio: 92 },
    {
        nombre_comunidad: "6 de Junio",
        id_municipio: 92 },
    {
        nombre_comunidad: "Aeronautico",
        id_municipio: 92 },
    {
        nombre_comunidad: "California",
        id_municipio: 92 },
    {
        nombre_comunidad: "Casa Bella",
        id_municipio: 92 },
    {
        nombre_comunidad: "Casa Nova II",
        id_municipio: 92 },
    {
        nombre_comunidad: "Chino",
        id_municipio: 92 },
    {
        nombre_comunidad: "Covipal",
        id_municipio: 92 },
    {
        nombre_comunidad: "El Condado",
        id_municipio: 92 },
    {
        nombre_comunidad: "El Manchon",
        id_municipio: 92 },
    {
        nombre_comunidad: "El Periodista",
        id_municipio: 92 },
    {
        nombre_comunidad: "El Trigal",
        id_municipio: 92 },
    {
        nombre_comunidad: "Equipetrol",
        id_municipio: 92 },
    {
        nombre_comunidad: "Fé y Alegría",
        id_municipio: 92 },
    {
        nombre_comunidad: "Flamingo",
        id_municipio: 92 },
    {
        nombre_comunidad: "Florida",
        id_municipio: 92 },
    {
        nombre_comunidad: "Guadalupe",
        id_municipio: 92 },
    {
        nombre_comunidad: "Guaracachi",
        id_municipio: 92 },
    {
        nombre_comunidad: "Guaracal",
        id_municipio: 92 },
    {
        nombre_comunidad: "Hilanderia",
        id_municipio: 92 },
    {
        nombre_comunidad: "Irma Suarez",
        id_municipio: 92 },
    {
        nombre_comunidad: "La Purisima",
        id_municipio: 92 },
    {
        nombre_comunidad: "Lab",
        id_municipio: 92 },
    {
        nombre_comunidad: "Las Americas",
        id_municipio: 92 },
    {
        nombre_comunidad: "Las Pampita",
        id_municipio: 92 },
    {
        nombre_comunidad: "Lindo",
        id_municipio: 92 },
    {
        nombre_comunidad: "Los Batos",
        id_municipio: 92 },
    {
        nombre_comunidad: "Los Chiflados",
        id_municipio: 92 },
    {
        nombre_comunidad: "Los Cumpas",
        id_municipio: 92 },
    {
        nombre_comunidad: "Los Olivos",
        id_municipio: 92 },
    {
        nombre_comunidad: "Los Penocos",
        id_municipio: 92 },
    {
        nombre_comunidad: "Los Totaises Sur",
        id_municipio: 92 },
    {
        nombre_comunidad: "Los Vallecitos",
        id_municipio: 92 },
    {
        nombre_comunidad: "Madre India",
        id_municipio: 92 },
    {
        nombre_comunidad: "Nuevo Amanecer",
        id_municipio: 92 },
    {
        nombre_comunidad: "Ñuflo de Chavez",
        id_municipio: 92 },
    {
        nombre_comunidad: "Palma Real",
        id_municipio: 92 },
    {
        nombre_comunidad: "Panamericano",
        id_municipio: 92 },
    {
        nombre_comunidad: "Polanco",
        id_municipio: 92 },
    {
        nombre_comunidad: "Primavera",
        id_municipio: 92 },
    {
        nombre_comunidad: "Roca y Coronado",
        id_municipio: 92 },
    {
        nombre_comunidad: "Saguapac sur",
        id_municipio: 92 },
    {
        nombre_comunidad: "San Antonio",
        id_municipio: 92 },
    {
        nombre_comunidad: "San Carlos",
        id_municipio: 92 },
    {
        nombre_comunidad: "San Francisco",
        id_municipio: 92 },
    {
        nombre_comunidad: "San Javier",
        id_municipio: 92 },
    {
        nombre_comunidad: "San Jorge",
        id_municipio: 92 },
    {
        nombre_comunidad: "Santa Isabel",
        id_municipio: 92 },
    {
        nombre_comunidad: "Santa Rosa",
        id_municipio: 92 },
    {
        nombre_comunidad: "Santistevan",
        id_municipio: 92 },
    {
        nombre_comunidad: "Soberania",
        id_municipio: 92 },
    {
        nombre_comunidad: "Transportista",
        id_municipio: 92 },
    {
        nombre_comunidad: "Urbari",
        id_municipio: 92 },
    {
        nombre_comunidad: "Vistoria",
        id_municipio: 92 },
    {
        nombre_comunidad: "Cocacola",
        id_municipio: 17 },
    {
        nombre_comunidad: "Nueva Alegría",
        id_municipio: 17 },
    {
        nombre_comunidad: "Avenida del Ejército",
        id_municipio: 17 },
    {
        nombre_comunidad: "Rincón Florida",
        id_municipio: 17 },
    {
        nombre_comunidad: "Israel",
        id_municipio: 17 },
    {
        nombre_comunidad: "Tokio Japón",
        id_municipio: 17 },
    {
        nombre_comunidad: "Nuevo Amanecer",
        id_municipio: 17 },
    {
        nombre_comunidad: "Calanchana",
        id_municipio: 17 },
    {
        nombre_comunidad: "Magisterio Rural",
        id_municipio: 17 },
    {
        nombre_comunidad: "Cerro Verde",
        id_municipio: 17 },
    {
        nombre_comunidad: "Copacabana A",
        id_municipio: 17 },
    {
        nombre_comunidad: "Rincón Calancha",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Esperanza",
        id_municipio: 17 },
    {
        nombre_comunidad: "Molle Vonle A",
        id_municipio: 17 },
    {
        nombre_comunidad: "Copacabana B",
        id_municipio: 17 },
    {
        nombre_comunidad: "Florida",
        id_municipio: 17 },
    {
        nombre_comunidad: "Juana Azurduy",
        id_municipio: 17 },
    {
        nombre_comunidad: "Palta Loma",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Isidro",
        id_municipio: 17 },
    {
        nombre_comunidad: "El Tejar",
        id_municipio: 17 },
    {
        nombre_comunidad: "El Progreso",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Sebastián",
        id_municipio: 17 },
    {
        nombre_comunidad: "Rumi Rumi",
        id_municipio: 17 },
    {
        nombre_comunidad: "Campamento El Ferroviario",
        id_municipio: 17 },
    {
        nombre_comunidad: "Los Pinos",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Miraflores Norte",
        id_municipio: 17 },
    {
        nombre_comunidad: "Nuevo Horizonte",
        id_municipio: 17 },
    {
        nombre_comunidad: "1° de Mayo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Fortaleza",
        id_municipio: 17 },
    {
        nombre_comunidad: "Pacachiir",
        id_municipio: 17 },
    {
        nombre_comunidad: "Paquchiir",
        id_municipio: 17 },
    {
        nombre_comunidad: "Urbanización Mariscal Sucre",
        id_municipio: 17 },
    {
        nombre_comunidad: "Estados Unidos",
        id_municipio: 17 },
    {
        nombre_comunidad: "Molle B",
        id_municipio: 17 },
    {
        nombre_comunidad: "Urbanización Sucre",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Martín",
        id_municipio: 17 },
    {
        nombre_comunidad: "El Niño",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Molle Grande",
        id_municipio: 17 },
    {
        nombre_comunidad: "Peñarolada",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Miguel",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Telmo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Tamari",
        id_municipio: 17 },
    {
        nombre_comunidad: "Coimca",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Fátima",
        id_municipio: 17 },
    {
        nombre_comunidad: "Magisterio Rural",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alta San Juan Manuel",
        id_municipio: 17 },
    {
        nombre_comunidad: "6 de Agosto",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Fátima",
        id_municipio: 17 },
    {
        nombre_comunidad: "Planta de Agua",
        id_municipio: 17 },
    {
        nombre_comunidad: "Guadalupe",
        id_municipio: 17 },
    {
        nombre_comunidad: "2 de Septiembre",
        id_municipio: 17 },
    {
        nombre_comunidad: "América",
        id_municipio: 17 },
    {
        nombre_comunidad: "El Rollo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Rosa",
        id_municipio: 17 },
    {
        nombre_comunidad: "Bolívar",
        id_municipio: 17 },
    {
        nombre_comunidad: "El Palmar",
        id_municipio: 17 },
    {
        nombre_comunidad: "Senac 2",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa San María",
        id_municipio: 17 },
    {
        nombre_comunidad: "Fuerte Caza",
        id_municipio: 17 },
    {
        nombre_comunidad: "27 de Mayo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Munaypata",
        id_municipio: 17 },
    {
        nombre_comunidad: "Shenkín",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Rosario",
        id_municipio: 17 },
    {
        nombre_comunidad: "19 de Marzo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Tierra Santa",
        id_municipio: 17 },
    {
        nombre_comunidad: "Bolivia",
        id_municipio: 17 },
    {
        nombre_comunidad: "Planta Diesel",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Villa Rosario",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Armonía C",
        id_municipio: 17 },
    {
        nombre_comunidad: "Panamericano",
        id_municipio: 17 },
    {
        nombre_comunidad: "Los Olivos",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Sucre",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Armonía A",
        id_municipio: 17 },
    {
        nombre_comunidad: "Máxima Auxiliadora",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto México",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Armonía B",
        id_municipio: 17 },
    {
        nombre_comunidad: "20 de Marzo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Azaní",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto San Pedro",
        id_municipio: 17 },
    {
        nombre_comunidad: "Horno Caza A",
        id_municipio: 17 },
    {
        nombre_comunidad: "Buena Vista",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Miguel",
        id_municipio: 17 },
    {
        nombre_comunidad: "Casegura",
        id_municipio: 17 },
    {
        nombre_comunidad: "Horno Caza B",
        id_municipio: 17 },
    {
        nombre_comunidad: "Buena Vista",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Miguel",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto San Luis",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Juan de Dios Bajo",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Luis",
        id_municipio: 17 },
    {
        nombre_comunidad: "Mac Pampa",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Sucre",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Rosa Bajo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Magisterio",
        id_municipio: 17 },
    {
        nombre_comunidad: "Tinta Mayu",
        id_municipio: 17 },
    {
        nombre_comunidad: "Mac Pampa",
        id_municipio: 17 },
    {
        nombre_comunidad: "Mariscal Sucre Delicias",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Sucre",
        id_municipio: 17 },
    {
        nombre_comunidad: "Loma Hermoso",
        id_municipio: 17 },
    {
        nombre_comunidad: "Las Retamas",
        id_municipio: 17 },
    {
        nombre_comunidad: "Juaquin Gantier",
        id_municipio: 17 },
    {
        nombre_comunidad: "Sica Sica",
        id_municipio: 17 },
    {
        nombre_comunidad: "Los Ítacos",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Antonio Alto",
        id_municipio: 17 },
    {
        nombre_comunidad: "Antonio Alto",
        id_municipio: 17 },
    {
        nombre_comunidad: "Trusupaya Bajo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Julio Villa",
        id_municipio: 17 },
    {
        nombre_comunidad: "Sagrado Corazón Alto",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Caleno",
        id_municipio: 17 },
    {
        nombre_comunidad: "Nuevo Paraíso",
        id_municipio: 17 },
    {
        nombre_comunidad: "Sagrado Corazón Centro",
        id_municipio: 17 },
    {
        nombre_comunidad: "La Imperial",
        id_municipio: 17 },
    {
        nombre_comunidad: "Honduras",
        id_municipio: 17 },
    {
        nombre_comunidad: "Japón",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Juan de Dios Bajo",
        id_municipio: 17 },
    {
        nombre_comunidad: "La Plata",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Clemente",
        id_municipio: 17 },
    {
        nombre_comunidad: "Japón",
        id_municipio: 17 },
    {
        nombre_comunidad: "Max Rodríguez",
        id_municipio: 17 },
    {
        nombre_comunidad: "Ukupiña",
        id_municipio: 17 },
    {
        nombre_comunidad: "Sagrado Corazón",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Cristóbal",
        id_municipio: 17 },
    {
        nombre_comunidad: "Andino",
        id_municipio: 17 },
    {
        nombre_comunidad: "Santa Bárbara",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Antonio Bajo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Simón Bolívar",
        id_municipio: 17 },
    {
        nombre_comunidad: "Tomás Catari",
        id_municipio: 17 },
    {
        nombre_comunidad: "Libertadores Simón Bolívar",
        id_municipio: 17 },
    {
        nombre_comunidad: "Yurak Yurak",
        id_municipio: 17 },
    {
        nombre_comunidad: "Horno B Magisterio",
        id_municipio: 17 },
    {
        nombre_comunidad: "Los Petroleros",
        id_municipio: 17 },
    {
        nombre_comunidad: "El Patacón",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Magrita",
        id_municipio: 17 },
    {
        nombre_comunidad: "Huerto Caza",
        id_municipio: 17 },
    {
        nombre_comunidad: "8 de Junio",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Rosario",
        id_municipio: 17 },
    {
        nombre_comunidad: "9 de Abril",
        id_municipio: 17 },
    {
        nombre_comunidad: "3 de Mayo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Bella Vista",
        id_municipio: 17 },
    {
        nombre_comunidad: "Sagrada Familia",
        id_municipio: 17 },
    {
        nombre_comunidad: "Alto Agrícola",
        id_municipio: 17 },
    {
        nombre_comunidad: "Julio Mendoza",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Sebastián",
        id_municipio: 17 },
    {
        nombre_comunidad: "Los Horizontes",
        id_municipio: 17 },
    {
        nombre_comunidad: "Sinchuro",
        id_municipio: 17 },
    {
        nombre_comunidad: "Cristo Rey",
        id_municipio: 17 },
    {
        nombre_comunidad: "Río Grande",
        id_municipio: 17 },
    {
        nombre_comunidad: "Libertadores Alto",
        id_municipio: 17 },
    {
        nombre_comunidad: "La Holanda",
        id_municipio: 17 },
    {
        nombre_comunidad: "Urbanización La Plata",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Margarita",
        id_municipio: 17 },
    {
        nombre_comunidad: "La Aguada",
        id_municipio: 17 },
    {
        nombre_comunidad: "San Isidro",
        id_municipio: 17 },
    {
        nombre_comunidad: "Santo Domingo",
        id_municipio: 17 },
    {
        nombre_comunidad: "Los Lechugales",
        id_municipio: 17 },
    {
        nombre_comunidad: "Noro Alto",
        id_municipio: 17 },
    {
        nombre_comunidad: "Puerto Ríos",
        id_municipio: 17 },
    {
        nombre_comunidad: "Tierra Alta",
        id_municipio: 17 },
    {
        nombre_comunidad: "Emita Rufiana",
        id_municipio: 17 },
    {
        nombre_comunidad: "Santa Cecilia",
        id_municipio: 17 },
    {
        nombre_comunidad: "Margarita II Rotonda",
        id_municipio: 17 },
    {
        nombre_comunidad: "Rotonda Víctor del Carmen",
        id_municipio: 17 },
    {
        nombre_comunidad: "Villa Flores",
        id_municipio: 17 },
    {
        nombre_comunidad: "Agosto",
        id_municipio: 17 },
    {
        nombre_comunidad: "Sica Sica",
        id_municipio: 17 },
    {
        nombre_comunidad: "Simón Bolívar",
        id_municipio: 17 },
    {
        nombre_comunidad: "Mesa Verde",
        id_municipio: 17 },
    {
        nombre_comunidad: "29 de Septiembre",
        id_municipio: 17 },
    {
        nombre_comunidad: "Los Espinal",
        id_municipio: 17 },
    {
        nombre_comunidad: "19 de Marzo",
        id_municipio: 17 }
    ]
    
      // Agregar los datos de departamento a la lista de departamentos
      for (const comunidad of comunidadData) {
        comunidades.push({
          nombre_comunidad: comunidad.nombre_comunidad,
          id_municipio: comunidad.id_municipio
        });
      }
  return comunidades;
}

// Function to generate and export the data
async function generarComunidad() {
  const comunidadData = await generate();
  return comunidadData;
}

// Export the function
module.exports = {
  generarComunidad,
};