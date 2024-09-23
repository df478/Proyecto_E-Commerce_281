const express = require('express');
const TieneService = require('./../services/tiene.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new TieneService();
const {
    obtenerTieneSchema,
    crearTieneSchema,
    actualizarTieneSchema,
} = require("../schemas/tiene.schema");

router.get('/', async (req, res) => {
    try {
        const aniadidos = await service.find();
        res.json(aniadidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los añadidos', error: error.message });
    }
});

router.get('/:id_producto/:id_notificacion', 
    validatorHandler(obtenerTieneSchema, "params"),
    async (req, res) => {
        try {
            const { id_producto, id_notificacion } = req.params;
            const aniadido = await service.findOne(id_producto, id_notificacion);
            if (!aniadido) {
                return res.status(404).json({ message: 'Tiene no encontrado' });
            }
            res.json(aniadido);
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
            const nuevoAniadido = await service.create(body);
            res.status(201).json(nuevoAniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al crear la tiene', error: error.message });
        }
    }
);

router.patch('/:id_producto/:id_notificacion', 
    validatorHandler(obtenerTieneSchema, "params"),
    validatorHandler(actualizarTieneSchema, "body"),
    async (req, res) => {
        try {
            const { id_producto, id_notificacion } = req.params;
            const body = req.body;
            const aniadido = await service.update(id_producto, id_notificacion, body);
            if (!aniadido) {
                return res.status(404).json({ message: 'Tiene no encontrada' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al actualizar la tiene', error: error.message });
        }
    }
);

router.delete('/:id_producto/:id_notificacion', 
    validatorHandler(obtenerTieneSchema, "params"),
    async (req, res) => {
        try {
            const { id_producto, id_notificacion } = req.params;
            const rta = await service.delete(id_producto, id_notificacion);
            if (!rta) {
                return res.status(404).json({ message: 'Tiene no encontrada' });
            }
            res.json(rta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la tiene', error: error.message });
        }
    }
);

module.exports = router;