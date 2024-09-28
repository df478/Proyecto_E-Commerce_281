const express = require("express");
const ArtesanoService = require("./../services/imagen.service");
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new ImagenService();
const {
  obtenerImagenSchema,
  crearImagenSchema,
  actualizarImagenSchema,
} = require("../schemas/imagen.schema");

router.get("/", async (req, res) => {
  try {
    const imagenes = await service.find();
    res.json(imagenes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las imagenes", error });
  }
});

router.get(
  "/:id_imagen",
  validatorHandler(obtenerImagenSchema, "params"),
  async (req, res) => {
    try {
      const { id_imagen } = req.params;
      const imagen = await service.findOne(id_imagen);
      if (!imagen) {
        return res.status(404).json({ message: "imagen no encontrado" });
      }
      res.json(imagen);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la imagen", error });
    }
  }
);

router.post(
  "/",
  validatorHandler(crearImagenSchema, "body"),
  async (req, res) => {
    try {
      const body = req.body;
      const nuevaImagen = await service.create(body);
      res.status(201).json(nuevaImagen);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el imagen", error });
    }
  }
);

router.patch(
  "/:id_imagen",
  validatorHandler(obtenerImagenSchema, "params"),
  validatorHandler(actualizarImagenSchema, "body"),
  async (req, res) => {
    try {
      const { id_imagen } = req.params;
      const body = req.body;
      const imagen = await service.update(id_imagen, body);
      if (!imagen) {
        return res.status(404).json({ message: "imagen no encontrado" });
      }
      res.json(imagen);
    } catch (error) {
      console.error(error); // Imprimir el error para depuración
      res
        .status(400)
        .json({
          message: "Error al actualizar la imagen",
          error: error.message || error,
        });
    }
  }
);

router.delete("/:id_imagen",
validatorHandler(obtenerImagenSchema, "params"),    
async (req, res) => {
  try {
    const { id_imagen } = req.params;
    const rta = await service.delete(id_imagen);
    if (!rta) {
      return res.status(404).json({ message: "imagen no encontrado" });
    }
    res.json(rta);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la imagen", error });
  }
});

module.exports = router;
