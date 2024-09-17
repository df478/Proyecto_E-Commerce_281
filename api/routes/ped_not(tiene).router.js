const express = require('express');
const PedNotService = require('./../services/ped_not(tiene).service');
const router = express.Router();
const service = new PedNotService();
//despliega
router.get('/', async (req, res) => {
    try {
        const pedNot = await service.find();
        res.json(pedNot);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener PedNot', error });
    }
});
//busca por id
router.get('/:id_ped/:id_not', async (req, res) => {
    try {
        const { id_ped,id_not } = req.params;
        const pedNot = await service.findOne(id_ped, id_not);
        if (!pedNot) {
            return res.status(404).json({ message: 'PedNot no encontrado' });
        }
        res.json(pedNot);
    } catch (error) {
        console.error('Error al obtener PedNot:', error);
        res.status(500).json({ message: 'Error al obtener PedNot', error: error.message });
    }
});
//agregar
router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoPedNot = await service.create(body);
        res.status(201).json(nuevoPedNot);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear PedNot', error });
    }
});
//modifica una parte o un atributo de pedNot
router.patch('/:id_ped/:id_not', async (req, res) => {
    try {
        const { id_ped,id_not } = req.params;
        const body = req.body;
        const pedNotActualizado = await service.update(id_ped,id_not, body);
        if (!pedNotActualizado) {
            return res.status(404).json({ message: 'PedNot no encontrado' });
        }
        res.json(pedNotActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar PedNot', error });
    }
});
//elimina un pdNot con un id identificado
router.delete('/:id_ped/:id_not', async (req, res) => {
    try {
        const { id_ped,id_not } = req.params;
        const rta = await service.delete(id_ped,id_not);
        if (!rta) {
            return res.status(404).json({ message: 'PedNot no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar PedNot', error });
    }
});

module.exports = router;
