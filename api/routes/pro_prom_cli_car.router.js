const express = require('express');
const ProPromCliCarService = require('./../services/pro_prom_cli_car.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new ProPromCliCarService();
const {
    obtenerProPromCliCarSchema,
    crearProPromCliCarSchema,
    actualizarProPromCliCarSchema,
} = require("../schemas/pro_prom_cli_car.schema");

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
    validatorHandler(obtenerProPromCliCarSchema, "params"),
    async (req, res) => {
        try {
            const { id_producto, id_carrito, id_cliente } = req.params;
            const aniadido = await service.findOne(id_producto, id_carrito, id_cliente);
            if (!aniadido) {
                return res.status(404).json({ message: 'Añadido no encontrado' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el añadido', error: error.message });
        }
    }
);

router.post('/', 
    validatorHandler(crearProPromCliCarSchema, "body"),
    async (req, res) => {
        try {
            const body = req.body;
            const nuevoAniadido = await service.create(body);
            res.status(201).json(nuevoAniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al crear el añadido', error: error.message });
        }
    }
);

router.patch('/:id_producto/:id_carrito/:id_cliente', 
    validatorHandler(obtenerProPromCliCarSchema, "params"),
    validatorHandler(actualizarProPromCliCarSchema, "body"),
    async (req, res) => {
        try {
            const { id_producto, id_carrito, id_cliente } = req.params;
            const body = req.body;
            const aniadido = await service.update(id_producto, id_carrito, id_cliente, body);
            if (!aniadido) {
                return res.status(404).json({ message: 'Añadido no encontrado' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al actualizar el añadido', error: error.message });
        }
    }
);

router.delete('/:id_producto/:id_carrito/:id_cliente', 
    validatorHandler(obtenerProPromCliCarSchema, "params"),
    async (req, res) => {
        try {
            const { id_producto, id_carrito, id_cliente } = req.params;
            const rta = await service.delete(id_producto, id_carrito, id_cliente);
            if (!rta) {
                return res.status(404).json({ message: 'Añadido no encontrado' });
            }
            res.json(rta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el añadido', error: error.message });
        }
    }
);

module.exports = router;
