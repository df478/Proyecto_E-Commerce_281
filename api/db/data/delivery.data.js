const { faker, de } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
  let deliverys = [];

  const deliveryData = [
    {
      nombre_usuario: "Alan Romero",
      email_usuario: "Alan@gmail.com",
      password_usuario: "*AlanR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:78945874
    },
    {
      nombre_usuario: "Carla Rivera",
      email_usuario: "CarlaR@gmail.com",
      password_usuario: "*CarlaR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:78948578
    },
    {
      nombre_usuario: "Diego Fernández",
      email_usuario: "DiegoF@gmail.com",
      password_usuario: "*DiegoR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:78987898
    },
    {
      nombre_usuario: "Fernanda Lopez",
      email_usuario: "FernandaL@gmail.com",
      password_usuario: "*FernaR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:78520258
    },
    {
      nombre_usuario: "Juan Perez",
      email_usuario: "JuanP@gmail.com",
      password_usuario: "*JuanR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:78598756
    },
    {
      nombre_usuario: "Lorena Suarez",
      email_usuario: "LorenaS@gmail.com",
      password_usuario: "*LorenR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:69878969
    },
    {
      nombre_usuario: "Roberto Sanchez",
      email_usuario: "RobertoS@gmail.com",
      password_usuario: "*RoberR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:69852369
    },
    {
      nombre_usuario: "Mariana Torres",
      email_usuario: "MarianaT@gmail.com",
      password_usuario: "*MariaR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:78978523
    },
    {
      nombre_usuario: "Pablo Rojas",
      email_usuario: "PabloR@gmail.com",
      password_usuario: "*PabloR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:78974120
    },
    {
      nombre_usuario: "Sofia Garcia",
      email_usuario: "SofiaG@gmail.com",
      password_usuario: "*SofiaR9*",
      tipo_usuario: "delivery",
      estado_delivery: "Inactivo",
      celular:78410258
    }
  ];
  

  for (const delivery of deliveryData) {
    const hash = await bcrypt.hash(delivery.password_usuario, 10);
    deliverys.push({
      nombre_usuario: delivery.nombre_usuario,
      email_usuario: delivery.email_usuario,
      password_usuario: hash,
      tipo_usuario: delivery.tipo_usuario,
      estado_delivery: delivery.estado_delivery,
      celular:delivery.celular
    });
  }
  return deliverys
}

// Function to generate and export the data
async function generarDelivery() {
  const deliveryData = await generate();
  return deliveryData;
}

// Export the function
module.exports = {
  generarDelivery,
};