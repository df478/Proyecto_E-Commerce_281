const express = require('express');
const CarritoService = require('./../services/carrito.service');
const router = express.Router();
const service = new CarritoService();


router.get('/', async (req, res) => {
    try {
        const carritos = await service.find();
        res.json(carritos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los carritos', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const carrito = await service.findOne(id);
        if (!carrito) {
            return res.status(404).json({ message: 'carrito no encontrado' });
        }
        res.json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoCarrito = await service.create(body);
        res.status(201).json(nuevoCarrito);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el carrito', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const carrito = await service.update(id, body);
        if (!carrito) {
            return res.status(404).json({ message: 'carrito no encontrado' });
        }
        res.json(carrito);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el carrito', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'carrito no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el carrito', error });
    }
});

module.exports = router;
