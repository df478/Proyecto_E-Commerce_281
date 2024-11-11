const express = require('express');
const ProductoService = require('./../services/producto.service');
const router = express.Router();
const service = new ProductoService();
const validatorHandler = require("../middlewares/validator.handler");
const {
    crearProductoSchema,
    actualizarProductoSchema,
    obtenerProductoSchema
    } = require("../schemas/producto.schema");


router.get('/', async (req, res) => {
    try {
        const productos = await service.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error });
    }
});

router.get('/:id_producto', 
    validatorHandler(obtenerProductoSchema, "params"), 
    async (req, res) => {
    try {
        const { id_producto } = req.params;
        const producto = await service.findOne(id_producto);
        if (!producto) {
            return res.status(404).json({ message: 'producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }
});

router.post('/', 
    validatorHandler(crearProductoSchema, "body"),
    async (req, res) => {
    try {
        const body = req.body;
        const nuevoProducto = await service.create(body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el producto', error });
    }
});

router.patch('/:id_producto', 
    validatorHandler(obtenerProductoSchema, "params"),
    validatorHandler(actualizarProductoSchema, "body"),
    async (req, res) => {
    try {
        const { id_producto } = req.params; // Obtener el ID del producto
        const body = req.body; // Obtener los cambios del cuerpo de la solicitud
        const producto = await service.update(id_producto, body); // Llamar al método update del servicio

        if (!producto) {
            return res.status(404).json({ message: 'producto no encontrado' });
        }
        res.json(producto); // Devolver el producto actualizado
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el producto', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'producto no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
});

module.exports = router;
