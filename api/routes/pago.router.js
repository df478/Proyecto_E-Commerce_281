const express = require('express');
const PagoService = require('./../services/pago.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new PagoService();
const {
    obtenerPagoSchema,
    crearPagoSchema,
    actualizarPagoSchema,
  } = require("../schemas/pago.schema");
  
router.get('/', async (req, res) => {
    try {
        const pagos = await service.find();
        res.json(pagos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pagos', error });
    }
});

router.get('/:id_pago', 
    validatorHandler(obtenerPagoSchema, "params"),
    async (req, res) => {
    try {
        const { id_pago } = req.params;
        const pago = await service.findOne(id_pago);
        if (!pago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(pago);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pago', error });
    }
});

router.post('/',
    validatorHandler(crearPagoSchema, "body"),
    async (req, res) => {
    try {
        const body = req.body;
        const nuevoPago = await service.create(body);
        res.status(201).json(nuevoPago);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el pago', error });
    }
});

router.patch('/:id_pago', 
    validatorHandler(obtenerPagoSchema, "params"),
    validatorHandler(actualizarPagoSchema, "body"),
    async (req, res) => {
    try {
        const { id_pago } = req.params;
        const body = req.body;
        const pago = await service.update(id_pago, body);
        if (!pago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(pago);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el pago', error });
    }
});

router.delete('/:id_pago', 
    validatorHandler(obtenerPagoSchema, "params"),
    async (req, res) => {
    try {
        const { id_pago } = req.params;
        const rta = await service.delete(id_pago);
        if (!rta) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pago', error });
    }
});

module.exports = router;
