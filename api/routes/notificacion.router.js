const express = require('express');
const NotificacionService = require('./../services/notificacion.service');
const router = express.Router();
const service = new NotificacionService();
const validatorHandler = require("../middlewares/validator.handler");
const {
    crearNotificacionSchema,
    actualizarNotificacionSchema,
    obtenerNotificacionSchema
    } = require("../schemas/notificacion.schema");


router.get('/', async (req, res) => {
    try {
        const notificacions = await service.find();
        res.json(notificacions);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los notificacions', error });
    }
});

router.get('/:id', 
    validatorHandler(obtenerNotificacionSchema, "params"), 
    async (req, res) => {
    try {
        const { id } = req.params;
        const notificacion = await service.findOne(id);
        if (!notificacion) {
            return res.status(404).json({ message: 'notificacion no encontrado' });
        }
        res.json(notificacion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el notificacion', error });
    }
});

router.post('/', 
    validatorHandler(crearNotificacionSchema, "body"),
    async (req, res) => {
    try {
        const body = req.body;
        const nuevoNotificacion = await service.create(body);
        res.status(201).json(nuevoNotificacion);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el notificacion', error });
    }
});

router.patch('/:id', 
    validatorHandler(obtenerNotificacionSchema, "params"),
    validatorHandler(actualizarNotificacionSchema, "body"),
    async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const notificacion = await service.update(id, body);
        if (!notificacion) {
            return res.status(404).json({ message: 'notificacion no encontrado' });
        }
        res.json(notificacion);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el notificacion', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'notificacion no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el notificacion', error });
    }
});

module.exports = router;