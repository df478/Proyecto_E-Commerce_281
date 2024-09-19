const express = require("express");
const ReseniaService = require("./../services/resenia.service"); 
const validatorHandler = require( "./../middlewares/validator.handler");
const router = express.Router();
const service = new ReseniaService();

const {
    crearReseniaSchema,
    actualizarReseniaSchema,
    obtenerReseniaSchema
  } = require( "./../schemas/resenia.schema ");
  
  router.get( "/ ", async (req, res) => {
    try {
      const resenias = await service.find();
      res.json(resenias);
    } catch (error) {
      res.status(500).json({ message:  "Error al obtener las reseñas ", error });
    }
  });
  
  router.get(
     "/:id_resenia ",
    validatorHandler(obtenerReseniaSchema,  "params "),
    async (req, res) => {
      try {
        const { id_resenia } = req.params;
        const resenia = await service.findOne(id_resenia);
        if (!resenia) {
          return res.status(404).json({ message:  "Reseña no encontrada " });
        }
        res.json(resenia);
      } catch (error) {
        res.status(500).json({ message:  "Error al obtener la reseña ", error });
      }
    }
  );
  
  router.post(
     "/ ",
    validatorHandler(crearReseniaSchema,  "body "),
    async (req, res) => {
      try {
        const body = req.body;
        const nuevaResenia = await service.create(body);
        res.status(201).json(nuevaResenia);
      } catch (error) {
        res.status(400).json({ message:  "Error al crear la reseña ", error });
      }
    }
  );
  
  router.patch(
     "/:id_resenia ",
    validatorHandler(obtenerReseniaSchema,  "params "),
    validatorHandler(actualizarReseniaSchema,  "body "),
    async (req, res) => {
      try {
        const { id_resenia } = req.params;
        const body = req.body;
        const resenia = await service.update(id_resenia, body);
        if (!resenia) {
          return res.status(404).json({ message:  "Reseña no encontrada " });
        }
        res.json(resenia);
      } catch (error) {
        console.error(error); 
        res
          .status(400)
          .json({
            message: "Error al actualizar la resenia",
            error: error.message || error,
          });
      }
    }
  );
  
  router.delete( "/:id_resenia ", async (req, res) => {
    try {
      const { id_resenia } = req.params;
      const rta = await service.delete(id_resenia);
      if (!rta) {
        return res.status(404).json({ message:  "Reseña no encontrada " });
      }
      res.json(rta);
    } catch (error) {
      res.status(500).json({ message:  "Error al eliminar la reseña ", error });
    }
  });
  
  module.exports = router;
  