const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
// const sequelize = require('./libs/sequelize');

const app = express();
const port = process.env.PORT || 3000; //puerto del servidor

app.use(express.json());

const whitelist = [
  "http://localhost:5500",
  "https://myapp.co",
  "http://localhost:3000",
  "http://localhost:5050",
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};

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
app.use(cors(options));

app.listen(port, () => {
  console.log("Mi port " + port);
});
