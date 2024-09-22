const express = require("express");
const ArtesanoService = require("./../services/artesano.service");
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new ArtesanoService();
const {
  obtenerArtesanoSchema,
  crearArtesanoSchema,
  actualizarArtesanoSchema,
} = require("../schemas/artesano.schema");

router.get("/", async (req, res) => {
  try {
    const artesanos = await service.find();
    res.json(artesanos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los artesanos", error });
  }
});

router.get(
  "/:id_usuario",
  validatorHandler(obtenerArtesanoSchema, "params"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const artesano = await service.findOne(id_usuario);
      if (!artesano) {
        return res.status(404).json({ message: "artesano no encontrado" });
      }
      res.json(artesano);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el artesano", error });
    }
  }
);

router.post(
  "/",
  validatorHandler(crearArtesanoSchema, "body"),
  async (req, res) => {
    try {
      const body = req.body;
      const nuevoArtesano = await service.create(body);
      res.status(201).json(nuevoArtesano);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el artesano", error });
    }
  }
);

router.patch(
  "/:id_usuario",
  validatorHandler(obtenerArtesanoSchema, "params"),
  validatorHandler(actualizarArtesanoSchema, "body"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const body = req.body;
      const artesano = await service.update(id_usuario, body);
      if (!artesano) {
        return res.status(404).json({ message: "artesano no encontrado" });
      }
      res.json(artesano);
    } catch (error) {
      console.error(error); // Imprimir el error para depuración
      res
        .status(400)
        .json({
          message: "Error al actualizar el artesano",
          error: error.message || error,
        });
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    if (!rta) {
      return res.status(404).json({ message: "artesano no encontrado" });
    }
    res.json(rta);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el artesano", error });
  }
});

module.exports = router;
