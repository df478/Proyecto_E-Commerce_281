const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const { logErrors, boomErrorHandler, errorHandler, ormErrorHandler } = require("./middlewares/error.handler");
// const sequelize = require('./libs/sequelize');

const app = express();
const port = process.env.PORT || 3000; //puerto del servidor

app.use(express.json());

const whitelist = [
  "http://localhost:5500",
  "https://myapp.co",
  "http://localhost:3000",
  "http://localhost:5050",
  "http://localhost:5000",
];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("no permitido"));
//     }
//   },
// };

const corsOptions = {
  origin: (origin, callback) => {
    if (['http://localhost:3000', 'https://ecommerce281-frontend-mei5fntt0-eleazars-projects-1336a03f.vercel.app'].includes(origin)) {
      callback(null, true); // Permite la solicitud
    } else {
      callback(new Error('CORS no permitido para este origen'), false);
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
require('./utils/auth')

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
    {
      nombre: "Alan",
      edad: 21,
    },
    {
      nombre: "Juan",
      edad: 54,
    },
    {
      nombre: "Ron",
      edad: 15,
    },
  ]);
});

app.get("/queriesxd", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    })
  } else {
    res.send("No hay parametros D:")
  }
});


routerApi(app);
// app.use(cors(options));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Mi port " + port);
});
