const express = require("express");
const cors = require("cors");
const http = require("http"); // Necesario para Socket.IO
const { Server } = require("socket.io"); // Servidor de Socket.IO
const routerApi = require("./routes");
const { logErrors, boomErrorHandler, errorHandler, ormErrorHandler } = require("./middlewares/error.handler");

const app = express();
const apiPort = process.env.PORT || 3000; // Puerto del servidor Express
const socketPort = 4000; // Puerto para Socket.IO

// Crear el servidor HTTP para Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Ajusta según la URL de tu frontend
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Configuración de middlewares
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
require("./utils/auth");

// Rutas de ejemplo
app.get("/api", (req, res) => {
  res.send("Hola mi server en express");
});

app.get("/api/nueva-ruta", (req, res) => {
  res.send("Hola soy un nuevo endpoint");
});

app.get("/home", (req, res) => {
  res.send("Home :)");
});

app.get("/archivo-json", (req, res) => {
  res.json([
    { nombre: "Alan", edad: 21 },
    { nombre: "Juan", edad: 54 },
    { nombre: "Ron", edad: 15 },
  ]);
});

app.get("/queriesxd", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No hay parametros D:");
  }
});

// Configuración de rutas y middlewares
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

// Configuración de eventos de Socket.IO
io.on("connection", (socket) => {
  console.log("Un usuario se ha conectado");

  // Escuchar un evento personalizado de pedido
  socket.on("new_order", (orderData) => {
    console.log("Nuevo pedido recibido:", orderData);

    // Notificar a todos los deliveries
    io.emit("notify_deliveries", {
      message: "Tienes un nuevo pedido",
      orderDetails: orderData, // Detalles del pedido
    });
  });

  // Escuchar cuando un cliente se desconecta
  socket.on("disconnect", () => {
    console.log("Un usuario se ha desconectado");
  });
});

// Iniciar el servidor de la API en el puerto 3000
app.listen(apiPort, () => {
  console.log("Servidor de la API corriendo en el puerto " + apiPort);
});

// Iniciar el servidor de WebSocket en el puerto 4000
server.listen(socketPort, () => {
  console.log("Servidor WebSocket corriendo en el puerto " + socketPort);
});