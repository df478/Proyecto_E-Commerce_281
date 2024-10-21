const express = require('express');
const EntregaService = require('./../services/entrega.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new EntregaService();
const {
    obtenerEntregaSchema,
    crearEntregaSchema,
    actualizarEntregaSchema,
} = require("../schemas/entrega.schema");

router.get('/', async (req, res) => {
    try {
        const entregas = await service.find();
        res.json(entregas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las entregas', error: error.message });
    }
});

router.get('/:id_entrega', 
    validatorHandler(obtenerEntregaSchema, "params"),
    async (req, res) => {
        try {
            const { id_entrega } = req.params;
            const entrega = await service.findOne(id_entrega);
            res.json(entrega);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la entrega', error: error.message });
        }
    }
);
//********************  obtener el contacto de delivery ***************************
router.get('/pedido/:id_pedido', 
    async (req, res) => {
        try {
            const { id_pedido } = req.params;
            const pedidoContacto = await service.ObtenerContactoDelivery(id_pedido);
            if (!pedidoContacto) {
                return res.status(404).json({ message: 'No se encontró el contacto Delivery' });
            }
            res.json(pedidoContacto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la contacto de Delivery', error: error.message });
        }
    }
);
//********************************************************************************
router.post('/', 
    validatorHandler(crearEntregaSchema, "body"),
    async (req, res) => {
        try {
            const body = req.body;
            const nuevaEntrega = await service.create(body);
            res.status(201).json(nuevaEntrega);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al crear la entrega', error: error.message });
        }
    }
);

router.patch('/:id_entrega', 
    validatorHandler(obtenerEntregaSchema, "params"),
    validatorHandler(actualizarEntregaSchema, "body"),
    async (req, res) => {
        try {
            const { id_entrega } = req.params;
            const body = req.body;
            const entrega = await service.update(id_entrega, body);
            res.json(entrega);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al actualizar la entrega', error: error.message });
        }
    }
);

router.delete('/:id_entrega', 
    validatorHandler(obtenerEntregaSchema, "params"),
    async (req, res) => {
        try {
            const { id_entrega } = req.params;
            const rta = await service.delete(id_entrega);
            res.json(rta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la entrega', error: error.message });
        }
    }
);

module.exports = router;
