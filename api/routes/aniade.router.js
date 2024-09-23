const express = require('express');
const AniadeService = require('./../services/aniade.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new AniadeService();
const {
    obtenerAniadeSchema,
    crearAniadeSchema,
    actualizarAniadeSchema,
} = require("../schemas/aniade.schema");

router.get('/', async (req, res) => {
    try {
        const aniadidos = await service.find();
        res.json(aniadidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los añadidos', error: error.message });
    }
});

router.get('/:id_producto/:id_carrito/:id_cliente', 
    validatorHandler(obtenerAniadeSchema, "params"),
    async (req, res) => {
        try {
            const { id_producto, id_carrito, id_cliente } = req.params;
            const aniadido = await service.findOne(id_producto, id_carrito, id_cliente);
            if (!aniadido) {
                return res.status(404).json({ message: 'Aniade no encontrado' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la aniade', error: error.message });
        }
    }
);

router.post('/', 
    validatorHandler(crearAniadeSchema, "body"),
    async (req, res) => {
        try {
            const body = req.body;
            const nuevoAniadido = await service.create(body);
            res.status(201).json(nuevoAniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al crear la aniade', error: error.message });
        }
    }
);

router.patch('/:id_producto/:id_carrito/:id_cliente', 
    validatorHandler(obtenerAniadeSchema, "params"),
    validatorHandler(actualizarAniadeSchema, "body"),
    async (req, res) => {
        try {
            const { id_producto, id_carrito, id_cliente } = req.params;
            const body = req.body;
            const aniadido = await service.update(id_producto, id_carrito, id_cliente, body);
            if (!aniadido) {
                return res.status(404).json({ message: 'Aniade no encontrada' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al actualizar la aniade', error: error.message });
        }
    }
);

router.delete('/:id_producto/:id_carrito/:id_cliente', 
    validatorHandler(obtenerAniadeSchema, "params"),
    async (req, res) => {
        try {
            const { id_producto, id_carrito, id_cliente } = req.params;
            const rta = await service.delete(id_producto, id_carrito, id_cliente);
            if (!rta) {
                return res.status(404).json({ message: 'Aniade no encontrada' });
            }
            res.json(rta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la aniade', error: error.message });
        }
    }
);

module.exports = router;
