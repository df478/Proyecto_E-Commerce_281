const express = require("express");
const MunicipioService = require("./../services/municipio.service");
const validatorHandler = require( "./../middlewares/validator.handler");
const router = express.Router();
const service = new MunicipioService();

const {
    crearMunicipioSchema,
    actualizarMunicipioSchema,
    obtenerMunicipioSchema
  } = require( "../schemas/municipio.schema");
  
  router.get( "/ ", async (req, res) => {
    try {
      const municipios = await service.find();
      res.json(municipios);
    } catch (error) {
      res.status(500).json({ message:  "Error al obtener los municipios ", error });
    }
  });
  
  router.get(
     "/:id_municipio ",
    validatorHandler(obtenerMunicipioSchema,  "params "),
    async (req, res) => {
      try {
        const { id_municipio } = req.params;
        const municipio = await service.findOne(id_municipio);
        if (!municipio) {
          return res.status(404).json({ message:  "Municipio no encontrado " });
        }
        res.json(municipio);
      } catch (error) {
        res.status(500).json({ message:  "Error al obtener el municipio ", error });
      }
    }
  );
  
  router.post(
     "/ ",
    validatorHandler(crearMunicipioSchema,  "body "),
    async (req, res) => {
      try {
        const body = req.body;
        const nuevoMunicipio = await service.create(body);
        res.status(201).json(nuevoMunicipio);
      } catch (error) {
        res.status(400).json({ message:  "Error al crear el municipio ", error });
      }
    }
  );
  
  router.patch(
     "/:id_municipio ",
    validatorHandler(obtenerMunicipioSchema,  "params "),
    validatorHandler(actualizarMunicipioSchema,  "body "),
    async (req, res) => {
      try {
        const { id_municipio } = req.params;
        const body = req.body;
        const municipio = await service.update(id_municipio, body);
        if (!municipio) {
          return res.status(404).json({ message:  "Municipio no encontrado " });
        }
        res.json(municipio);        
      } catch (error) {
        console.error(error); 
        res
          .status(400)
          .json({
            message: "Error al actualizar el municipio",
            error: error.message || error,
          });
      }
    }
  );
  
  router.delete( "/:id_municipio ", async (req, res) => {
    try {
      const { id_municipio } = req.params;
      const rta = await service.delete(id_municipio);
      if (!rta) {
        return res.status(404).json({ message:  "Municipio no encontrado " });
      }
      res.json(rta);
    } catch (error) {
      res.status(500).json({ message:  "Error al eliminar el municipio ", error });
    }
  });
  
  module.exports = router;
  