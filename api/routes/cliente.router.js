const express = require('express');
const ClienteService = require('./../services/cliente.service');
const router = express.Router();
const service = new ClienteService();

router.get('/', async (req, res) => {
    try {
        const clientes = await service.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los clientes', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await service.findOne(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el cliente', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoCliente = await service.create(body);
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el cliente', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const cliente = await service.update(id, body);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el cliente', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el cliente', error });
    }
});

module.exports = router;
