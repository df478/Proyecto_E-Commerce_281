const express = require('express');
const SupervisadoService = require('./../services/supervisado.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new SupervisadoService();
const {
    obtenerSupervisadoSchema,
    crearSupervisadoSchema,
    actualizarSupervisadoSchema,
} = require("../schemas/supervisado.schema");

router.get('/', async (req, res) => {
    try {
        const supervisados = await service.find();
        res.json(supervisados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los supervisados', error: error.message });
    }
});

router.get('/:id_supervisado', 
    validatorHandler(obtenerSupervisadoSchema, "params"),
    async (req, res) => {
        try {
            const { id_supervisado } = req.params;
            const supervisado = await service.findOne(id_supervisado);
            res.json(supervisado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el supervisado', error: error.message });
        }
    }
);

router.post('/', 
    validatorHandler(crearSupervisadoSchema, "body"),
    async (req, res) => {
        try {
            const body = req.body;
            const nuevoSupervisado = await service.create(body);
            res.status(201).json(nuevoSupervisado);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al crear el supervisado', error: error.message });
        }
    }
);

router.patch('/:id_supervisado', 
    validatorHandler(obtenerSupervisadoSchema, "params"),
    validatorHandler(actualizarSupervisadoSchema, "body"),
    async (req, res) => {
        try {
            const { id_supervisado } = req.params;
            const body = req.body;
            const supervisado = await service.update(id_supervisado, body);
            res.json(supervisado);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al actualizar el supervisado', error: error.message });
        }
    }
);

router.delete(
    "/:id_supervisado",
    validatorHandler(obtenerSupervisadoSchema, "params"),
    async (req, res) => {
      try {
        const { id_supervisado } = req.params;
        const rta = await service.delete(id_supervisado);
        if (!rta) {
          return res.status(404).json({ message: "supervisado no encontrado" });
        }
        res.json(rta);
      } catch (error) {
        res.status(500).json({ message: "Error al eliminar el supervisasdo", error });
      }
    }
  );

module.exports = router;
