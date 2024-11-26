const express = require('express');
const PromocionService = require('./../services/promocion.service');
const router = express.Router();
const service = new PromocionService();
const validatorHandler = require("../middlewares/validator.handler");
const {
    crearPromocionSchema,
    actualizarPromocionSchema,
    obtenerPromocionSchema
    } = require("../schemas/promocion.schema");


router.get('/', async (req, res) => {
    try {
        const promocions = await service.find();
        res.json(promocions);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los promocions', error });
    }
});

router.get('/:id', 
    validatorHandler(obtenerPromocionSchema, "params"), 
    async (req, res) => {
    try {
        const { id } = req.params;
        const promocion = await service.findOne(id);
        if (!promocion) {
            return res.status(404).json({ message: 'promocion no encontrado' });
        }
        res.json(promocion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el promocion', error });
    }
});

router.post('/', 
    validatorHandler(crearPromocionSchema, "body"),
    async (req, res) => {
    try {
        const body = req.body;
        const nuevoPromocion = await service.create(body);
        res.status(201).json(nuevoPromocion);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el promocion', error });
    }
});

router.patch('/:id', 
    validatorHandler(obtenerPromocionSchema, "params"),
    validatorHandler(actualizarPromocionSchema, "body"),
    async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const promocion = await service.update(id, body);
        if (!promocion) {
            return res.status(404).json({ message: 'promocion no encontrado' });
        }
        res.json(promocion);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el promocion', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'promocion no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el promocion', error });
    }
});

module.exports = router;
