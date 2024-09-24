const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");


async function generate() {
  let clientes = [];
  
  const clientesData = [
    {
      nombre_usuario: "Mario Mamani",
      email_usuario: "MarioM@gmail.com",
      password_usuario: "*MariMl1*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-08-25",
      nro_compra: 10
    },
    {
      nombre_usuario: "Ana Torres",
      email_usuario: "AnaT@gmail.com",
      password_usuario: "*AnaT1*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-08-26",
      nro_compra: 5
    },
    {
      nombre_usuario: "Juan Perez",
      email_usuario: "JuanP@gmail.com",
      password_usuario: "*JuanP2*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-08-27",
      nro_compra: 15
    },
    {
      nombre_usuario: "Elena Rojas",
      email_usuario: "ElenaR@gmail.com",
      password_usuario: "*ElenaR3*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-08-28",
      nro_compra: 8
    },
    {
      nombre_usuario: "Carlos Lopez",
      email_usuario: "CarlosL@gmail.com",
      password_usuario: "*CarlosL4*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-08-29",
      nro_compra: 12
    },
    {
      nombre_usuario: "Teresa Jimenez",
      email_usuario: "TeresaJ@gmail.com",
      password_usuario: "*TeresaJ5*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-08-30",
      nro_compra: 20
    },
    {
      nombre_usuario: "Lucas Pato",
      email_usuario: "LucasP@gmail.com",
      password_usuario: "*LucasP6*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-08-31",
      nro_compra: 3
    },
    {
      nombre_usuario: "Roberto Garcia",
      email_usuario: "RobertoG@gmail.com",
      password_usuario: "*RobertoG7*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-01",
      nro_compra: 7
    },
    {
      nombre_usuario: "Sofia Morales",
      email_usuario: "SofiaM@gmail.com",
      password_usuario: "*SofiaM8*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-02",
      nro_compra: 9
    },
    {
      nombre_usuario: "David Fernandez",
      email_usuario: "DavidF@gmail.com",
      password_usuario: "*DavidF9*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-03",
      nro_compra: 4
    },
    {
      nombre_usuario: "Gabriela Castro",
      email_usuario: "GabrielaC@gmail.com",
      password_usuario: "*GabrielaC0*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-04",
      nro_compra: 11
    },
    {
      nombre_usuario: "Javier Ruiz",
      email_usuario: "JavierR@gmail.com",
      password_usuario: "*JavierR1*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-05",
      nro_compra: 6
    },
    {
      nombre_usuario: "Mariana Lopez",
      email_usuario: "MarianaL@gmail.com",
      password_usuario: "*MarianaL2*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-06",
      nro_compra: 13
    },
    {
      nombre_usuario: "Fernando Diaz",
      email_usuario: "FernandoD@gmail.com",
      password_usuario: "*FernandoD3*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-07",
      nro_compra: 2
    },
    {
      nombre_usuario: "Valentina Romero",
      email_usuario: "ValentinaR@gmail.com",
      password_usuario: "*ValentinaR4*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-08",
      nro_compra: 14
    },
    {
      nombre_usuario: "Andres Jimenez",
      email_usuario: "AndresJ@gmail.com",
      password_usuario: "*AndresJ5*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-09",
      nro_compra: 1
    },
    {
      nombre_usuario: "Paula Aguirre",
      email_usuario: "PaulaA@gmail.com",
      password_usuario: "*PaulaA6*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-10",
      nro_compra: 17
    },
    {
      nombre_usuario: "Nicolas Castro",
      email_usuario: "NicolásC@gmail.com",
      password_usuario: "*NicolasC7*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-11",
      nro_compra: 10
    },
    {
      nombre_usuario: "Laura Medina",
      email_usuario: "LauraM@gmail.com",
      password_usuario: "*LauraM8*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-12",
      nro_compra: 19
    },
    {
      nombre_usuario: "Manuel Torres",
      email_usuario: "ManuelT@gmail.com",
      password_usuario: "*ManuelT9*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-13",
      nro_compra: 16
    },
    {
      nombre_usuario: "Claudia Herrera",
      email_usuario: "ClaudiaH@gmail.com",
      password_usuario: "*ClaudiaH0*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-14",
      nro_compra: 3
    },
    {
      nombre_usuario: "Tomas Villanueva",
      email_usuario: "TomasV@gmail.com",
      password_usuario: "*TomasV1*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-15",
      nro_compra: 12
    },
    {
      nombre_usuario: "Jimena Salazar",
      email_usuario: "JimenaS@gmail.com",
      password_usuario: "*JimenaS2*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-16",
      nro_compra: 9
    },
    {
      nombre_usuario: "Felipe Gomez",
      email_usuario: "FelipeG@gmail.com",
      password_usuario: "*FelipeG3*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-17",
      nro_compra: 20
    },
    {
      nombre_usuario: "Sofia Leon",
      email_usuario: "SofiaL@gmail.com",
      password_usuario: "*SofiaL4*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-18",
      nro_compra: 11
    },
    {
      nombre_usuario: "Andres Ortega",
      email_usuario: "AndresO@gmail.com",
      password_usuario: "*AndresO5*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-19",
      nro_compra: 6
    },
    {
      nombre_usuario: "Ines Castro",
      email_usuario: "InesC@gmail.com",
      password_usuario: "*InesC6*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-20",
      nro_compra: 15
    },
    {
      nombre_usuario: "Raul Méndez",
      email_usuario: "RaulM@gmail.com",
      password_usuario: "*RaulM7*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-21",
      nro_compra: 8
    },
    {
      nombre_usuario: "Lila Serrano",
      email_usuario: "LilaS@gmail.com",
      password_usuario: "*LilaS8*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-22",
      nro_compra: 5
    },
    {
      nombre_usuario: "Victor Romero",
      email_usuario: "VictorR@gmail.com",
      password_usuario: "*VictorR9*",
      tipo_usuario: "cliente",
      fecha_registro: "2024-09-23",
      nro_compra: 2
    }
  ];

  for (const cliente of clientesData) {
    const hash = await bcrypt.hash(cliente.password_usuario, 10);
    clientes.push({
      nombre_usuario: cliente.nombre_usuario,
      email_usuario: cliente.email_usuario,
      password_usuario: hash,
      tipo_usuario: cliente.tipo_usuario,
      fecha_registro: cliente.fecha_registro,
      nro_compras: cliente.nro_compra
    });
  }
  return clientes;
}

// Function to generate and export the data
async function generarCliente() {
  const clienteData = await generate();
  return clienteData;
}

// Export the function
module.exports = {
  generarCliente,
};

