const express = require("express");
const AdministradorService = require("./../services/administrador.service");
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new AdministradorService();
const {
  obtenerAdministradorSchema,
  crearAdministradorSchema,
  actualizarAdministradorSchema,
} = require("../schemas/administrador.schema");

router.get("/", async (req, res) => {
  try {
    const administradors = await service.find();
    res.json(administradors);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los administradores", error });
  }
});

router.get(
  "/:id_usuario",
  validatorHandler(obtenerAdministradorSchema, "params"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const administrador = await service.findOne(id_usuario);
      if (!administrador) {
        return res.status(404).json({ message: "Administrador no encontrado" });
      }
      res.json(administrador);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el administrador", error });
    }
  }
);

router.post(
  "/",
  validatorHandler(crearAdministradorSchema, "body"),
  async (req, res) => {
    try {
      const body = req.body;
      const nuevoAdministrador = await service.create(body);
      res.status(201).json(nuevoAdministrador);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el administrador", error });
    }
  }
);

router.patch(
  "/:id_usuario",
  validatorHandler(obtenerAdministradorSchema, "params"),
  validatorHandler(actualizarAdministradorSchema, "body"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const body = req.body;
      const administrador = await service.update(id_usuario, body);
      if (!administrador) {
        return res.status(404).json({ message: "Administrador no encontrado" });
      }
      res.json(administrador);
    } catch (error) {
      console.error(error); // Imprimir el error para depuración
      res
        .status(400)
        .json({
          message: "Error al actualizar el administrador",
          error: error.message || error,
        });
    }
  }
);

router.delete("/:id", 
  validatorHandler(obtenerAdministradorSchema, "params"),
  async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    if (!rta) {
      return res.status(404).json({ message: "Administrador no encontrado" });
    }
    res.json(rta);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el administrador", error });
  }
});

module.exports = router;