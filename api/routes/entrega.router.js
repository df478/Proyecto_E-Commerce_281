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
        const aniadidos = await service.find();
        res.json(aniadidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los añadidos', error: error.message });
    }
});

router.get('/:id_pedido/:id_delivery/:id_cliente', 
    validatorHandler(obtenerEntregaSchema, "params"),
    async (req, res) => {
        try {
            const { id_pedido, id_delivery, id_cliente } = req.params;
            const aniadido = await service.findOne(id_pedido, id_delivery, id_cliente);
            if (!aniadido) {
                return res.status(404).json({ message: 'Entrega no encontrado' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la entrega', error: error.message });
        }
    }
);

router.post('/', 
    validatorHandler(crearEntregaSchema, "body"),
    async (req, res) => {
        try {
            const body = req.body;
            const nuevoAniadido = await service.create(body);
            res.status(201).json(nuevoAniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al crear la entrega', error: error.message });
        }
    }
);

router.patch('/:id_pedido/:id_delivery/:id_cliente', 
    validatorHandler(obtenerEntregaSchema, "params"),
    validatorHandler(actualizarEntregaSchema, "body"),
    async (req, res) => {
        try {
            const { id_pedido, id_delivery, id_cliente } = req.params;
            const body = req.body;
            const aniadido = await service.update(id_pedido, id_delivery, id_cliente, body);
            if (!aniadido) {
                return res.status(404).json({ message: 'Entrega no encontrada' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al actualizar la entrega', error: error.message });
        }
    }
);

router.delete('/:id_pedido/:id_delivery/:id_cliente', 
    validatorHandler(obtenerEntregaSchema, "params"),
    async (req, res) => {
        try {
            const { id_pedido, id_delivery, id_cliente } = req.params;
            const rta = await service.delete(id_pedido, id_delivery, id_cliente);
            if (!rta) {
                return res.status(404).json({ message: 'Entrega no encontrada' });
            }
            res.json(rta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la entrega', error: error.message });
        }
    }
);

module.exports = router;
