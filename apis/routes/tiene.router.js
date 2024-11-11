const express = require('express');
const TieneService = require('./../services/tiene.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new TieneService(); // Corregido el nombre de la clase

const {
    obtenerTieneSchema,
    crearTieneSchema,
    actualizarTieneSchema,
} = require("../schemas/tiene.schema");

router.get('/', async (req, res) => {
    try {
        const tiene = await service.find();
        res.json(tiene);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los registros de tiene', error: error.message });
    }
});

router.get('/:id_tiene', 
    validatorHandler(obtenerTieneSchema, "params"),
    async (req, res) => {
        try {
            const { id_tiene } = req.params;
            const tiene = await service.findOne(id_tiene);
            res.json(tiene);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la tiene', error: error.message });
        }
    }
);

router.post('/', 
    validatorHandler(crearTieneSchema, "body"),
    async (req, res) => {
        try {
            const body = req.body;
            const nuevoTiene = await service.create(body);
            res.status(201).json(nuevoTiene);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al crear la tiene', error: error.message });
        }
    }
);

router.patch('/:id_tiene', 
    validatorHandler(obtenerTieneSchema, "params"),
    validatorHandler(actualizarTieneSchema, "body"),
    async (req, res) => {
        try {
            const { id_tiene } = req.params;
            const body = req.body;
            const tiene = await service.update(id_tiene, body);
            res.json(tiene);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al actualizar la tiene', error: error.message });
        }
    }
);

router.delete('/:id_tiene', 
    validatorHandler(obtenerTieneSchema, "params"),
    async (req, res) => {
        try {
            const { id_tiene } = req.params;
            const rta = await service.delete(id_tiene);
            res.json(rta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la tiene', error: error.message });
        }
    }
);

module.exports = router;
