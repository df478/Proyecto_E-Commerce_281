const express = require('express');
const Ped_cli_delService = require('./../services/ped_cli_del.service'); 
const router = express.Router();
const service = new Ped_cli_delService();

router.get('/', async (req, res) => {
    try {
        const ped_cli_dels = service.find();
        res.json(ped_cli_dels);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los ped_cli_dels', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const ped_cli_del = service.findOne(id);
        if (!ped_cli_del) {
            return res.status(404).json({ message: 'ped_cli_del no encontrado' });
        }
        res.json(ped_cli_del);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el ped_cli_del', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevaped_cli_del = service.create(body);
        res.status(201).json(nuevaped_cli_del);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el ped_cli_del', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const ped_cli_del = service.update(id, body);
        if (!ped_cli_del) {
            return res.status(404).json({ message: 'ped_cli_del no encontrado' });
        }
        res.json(ped_cli_del);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el ped_cli_del', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'ped_cli_del no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el ped_cli_del', error });
    }
});

module.exports = router;