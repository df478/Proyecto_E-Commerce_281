const express = require('express');
const ProvinciaService = require('./../services/provincia.service'); 
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new ProvinciaService();
const {
    obtenerProvinciaSchema,
    crearProvinciaSchema,
    actualizarProvinciaSchema,
  } = require("../schemas/provincia.schema");

router.get('/',
    async (req, res) => {
    try {
        const provincias = await service.find();
        res.json(provincias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los provincias', error });
    }
});

router.get('/:id_provincia', 
    validatorHandler(obtenerProvinciaSchema, "params"),
    async (req, res) => {
    try {
        const { id_provincia } = req.params;
        const provincia = await service.findOne(id_provincia);
        if (!provincia) {
            return res.status(404).json({ message: 'provincia no encontrado' });
        }
        res.json(provincia);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el provincia', error });
    }
});

router.post('/', 
    validatorHandler(crearProvinciaSchema, "body"),
    async (req, res) => {
    try {
        const body = req.body;
        const nuevaProvincia = await service.create(body);
        res.status(201).json(nuevaProvincia);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el provincia', error });
    }
});

router.patch('/:id_provincia',
    validatorHandler(obtenerProvinciaSchema, "params"),
    validatorHandler(actualizarProvinciaSchema, "body"),
    async (req, res) => {
    try {
        const { id_provincia } = req.params;
        const body = req.body;
        const provincia = await service.update(id_provincia, body);
        if (!provincia) {
            return res.status(404).json({ message: 'provincia no encontrado' });
        }
        res.json(provincia);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el provincia', error });
    }
});

router.delete('/:id_provincia',
    validatorHandler(obtenerProvinciaSchema, "params"),
    async (req, res) => {
    try {
        const { id_provincia } = req.params;
        const rta = await service.delete(id_provincia);
        if (!rta) {
            return res.status(404).json({ message: 'provincia no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el provincia', error });
    }
});

module.exports = router;