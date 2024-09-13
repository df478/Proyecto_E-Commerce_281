const express = require('express');
const AdministradorService = require('./../services/administrador.service');
const router = express.Router();
const service = new AdministradorService();

router.get('/', async (req, res) => {
    try {
        const administradores = await service.find();
        res.json(administradores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los administradores', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const administrador = await service.findOne(id);
        if (!administrador) {
            return res.status(404).json({ message: 'administrador no encontrado' });
        }
        res.json(administrador);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el administrador', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoAdministrador = await service.create(body);
        res.status(201).json(nuevoAdministrador);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el administrador', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const administrador = await service.update(id, body);
        if (!administrador) {
            return res.status(404).json({ message: 'administrador no encontrado' });
        }
        res.json(administrador);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el administrador', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'administrador no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el administrador', error });
    }
});

module.exports = router;
