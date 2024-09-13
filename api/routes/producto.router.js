const express = require('express');
const ProductoService = require('./../services/producto.service');
const router = express.Router();
const service = new ProductoService();

router.get('/', async (req, res) => {
    try {
        const productos = await service.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await service.findOne(id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoProducto = await service.create(body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el producto', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const producto = await service.update(id, body);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el producto', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
});

module.exports = router;
