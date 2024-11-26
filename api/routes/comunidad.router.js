const express = require("express");
const ComunidadService = require("./../services/comunidad.service"); 
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new ComunidadService();
const {
    obtenerComunidadSchema,
    crearComunidadSchema,
    actualizarComunidadSchema,
  } = require("./../schemas/comunidad.schema");
  
  router.get("/", 
    async (req, res) => {
    try {
      const comunidades = await service.find();
      res.json(comunidades);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las comunidades", error });
    }
  });
  
  router.get(
    "/:id_comunidad",
    validatorHandler(obtenerComunidadSchema, "params"),
    async (req, res) => {
      try {
        const { id_comunidad } = req.params;
        const comunidad = await service.findOne(id_comunidad);
        if (!comunidad) {
          return res.status(404).json({ message: "Comunidad no encontrada" });
        }
        res.json(comunidad);
      } catch (error) {
        res.status(500).json({ message:  "Error al obtener la comunidad ", error });
      }
    }
  );
  
  router.post(
    "/",
    validatorHandler(crearComunidadSchema, "body"),
    async (req, res) => {
      try {
        const body = req.body;
        const nuevoComunidad = await service.create(body);
        console.log(nuevoComunidad);
        res.status(201).json(nuevoComunidad);
      } catch (error) {
        res.status(400).json({ message: "Error al crear el comunidad", error });
      }
    }
  );
  
  router.patch(
    "/:id_comunidad",
    validatorHandler(obtenerComunidadSchema, "params"),
    validatorHandler(actualizarComunidadSchema, "body"),
    async (req, res) => {
      try {
        const { id_comunidad } = req.params;
        const body = req.body;
        const comunidad = await service.update(id_comunidad, body);
        if (!comunidad) {
          return res.status(404).json({ message: "comunidad no encontrado" });
        }
        res.json(comunidad);
      } catch (error) {
        console.error(error); // Imprimir el error para depuración
        res
          .status(400)
          .json({
            message: "Error al actualizar el delivery",
            error: error.message || error,
          });
      }
    }
  );
  
  router.delete("/:id_comunidad", 
    validatorHandler(obtenerComunidadSchema, "params"),
    async (req, res) => {
    try {
      const { id_comunidad } = req.params;
      const rta = await service.delete(id_comunidad);
      if (!rta) {
        return res.status(404).json({ message: "Delivery no encontrado" });
      }
      res.json(rta);
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el delivery", error });
    }
  });
  
  module.exports = router;
  

