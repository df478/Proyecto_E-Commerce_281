const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const { setUpModels } = require("../db/models/index");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",  // Usamos el dialecto correcto
  logging: (msg) => console.log(`[SQL]: ${msg}`),
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,  // Puedes cambiarlo a true en producción para mayor seguridad
    }
  }
});

setUpModels(sequelize);

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos y tablas sincronizadas");
  })
  .catch((error) => {
    console.error("Error al sincronizar base de datos", error);
  });

module.exports = sequelize;
