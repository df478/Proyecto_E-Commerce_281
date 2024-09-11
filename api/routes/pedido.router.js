const express = require('express');
const PedidoService = require('./../services/pedido.service');
const router = express.Router();
const service = new PedidoService();


router.get('/', async (req, res) => {
    try {
        const pedidos = await service.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await service.findOne(id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pedido', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoPedido = await service.create(body);
        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el pedido', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const pedido = await service.update(id, body);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el pedido', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pedido', error });
    }
});

module.exports = router;
