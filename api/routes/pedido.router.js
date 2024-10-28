const express = require('express');
const pedidoervice = require('./../services/pedido.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new pedidoervice();
const {
    obtenerPedidoSchema,
    crearPedidoSchema,
    actualizarPedidoSchema,
  } = require("../schemas/pedido.schema");

router.get('/', async (req, res) => {
    try {
        const pedido = await service.find();
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos', error });
    }
});

/*router.get('/:id_pedido',
    validatorHandler(obtenerPedidoSchema, "params"),
    async (req, res) => {
    try {
        const { id_pedido } = req.params;
        const pedido = await service.findOne(id_pedido);
        if (!pedido) {
            return res.status(404).json({ message: 'pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pedido', error });
    }
});*/

// ruta para obtener los pedidos de un cliente mas contacto del delivery
router.get('/:id_pedido', 
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
    async (req, res) => {
    try {
        const body = req.body;
        const nuevopedido = await service.create(body);
        res.status(201).json(nuevopedido);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el pedido', error });
    }
});

router.patch('/:id_pedido', 
    validatorHandler(obtenerPedidoSchema, "params"),
    validatorHandler(actualizarPedidoSchema, "body"),
    async (req, res) => {
    try {
        const { id_pedido } = req.params;
        const body = req.body;
        const pedido = await service.update(id_pedido, body);
        if (!pedido) {
            return res.status(404).json({ message: 'pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el pedido', error });
    }
});

router.delete('/:id_pedido', 
    validatorHandler(obtenerPedidoSchema, "params"),
    async (req, res) => {
    try {
        const { id_pedido } = req.params;
        const rta = await service.delete(id_pedido);
        if (!rta) {
            return res.status(404).json({ message: 'pedido no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pedido', error });
    }
});

module.exports = router;
