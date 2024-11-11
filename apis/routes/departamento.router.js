const express = require('express');
const DepartamentoService = require('./../services/departamento.service'); 
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new DepartamentoService();
const {
    obtenerDepartamentoSchema,
    crearDepartamentoSchema,
    actualizarDepartamentoSchema,
  } = require("../schemas/departamento.schema");

router.get('/',
    async (req, res) => {
    try {
        const departamentos = await service.find();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los departamentos', error });
    }
});

router.get('/:id_departamento', 
    validatorHandler(obtenerDepartamentoSchema, "params"),
    async (req, res) => {
    try {
        const { id_departamento } = req.params;
        const departamento = await service.findOne(id_departamento);
        if (!departamento) {
            return res.status(404).json({ message: 'departamento no encontrado' });
        }
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el departamento', error });
    }
});

router.post('/', 
    validatorHandler(crearDepartamentoSchema, "body"),
    async (req, res) => {
    try {
        const body = req.body;
        const nuevaDepartamento = await service.create(body);
        res.status(201).json(nuevaDepartamento);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el departamento', error });
    }
});

router.patch('/:id_departamento',
    validatorHandler(obtenerDepartamentoSchema, "params"),
    validatorHandler(actualizarDepartamentoSchema, "body"),
    async (req, res) => {
    try {
        const { id_departamento } = req.params;
        const body = req.body;
        const departamento = await service.update(id_departamento, body);
        if (!departamento) {
            return res.status(404).json({ message: 'departamento no encontrado' });
        }
        res.json(departamento);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el departamento', error });
    }
});

router.delete('/:id_departamento',
    validatorHandler(obtenerDepartamentoSchema, "params"),
    async (req, res) => {
    try {
        const { id_departamento } = req.params;
        const rta = await service.delete(id_departamento);
        if (!rta) {
            return res.status(404).json({ message: 'departamento no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el departamento', error });
    }
});

module.exports = router;