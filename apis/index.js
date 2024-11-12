const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");  // Aquí importamos tu routerApi

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // Permitir cookies y credenciales
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());  // Middleware para analizar JSON

// Rutas de la API
routerApi(app);  // Usamos el routerApi que gestiona todas las rutas

// Exportar la aplicación para que Vercel la maneje como función serverless
module.exports = app;
