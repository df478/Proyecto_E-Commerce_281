const express = require('express');

const ProductoService = require('./../services/producto.service');
const router = express.Router();
const service = new ProductoService();

router.get('/', (req, res) => {
    const productos = service.find();
    res.json(productos);
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const producto = service.findOne(id);
    res.json(producto);
});
router.post('/', (req,res) => {
    const body = req.body;
    const nuevoProducto = service.create(body);
    res.status(201).json(nuevoProducto);
})
router.patch('/:id', (req,res) => {
    const { id } = req.params;
    const body = req.body;
    const producto = service.update(id, body);
    res.json(producto);
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const rta = service.delete(id);
    res.json(rta);
})

module.exports = router;