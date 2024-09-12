const express = require('express');
const ReseniaService = require('./../services/resenia.service'); 
const router = express.Router();
const service = new ReseniaService();

router.get('/', (req, res) => {
    try {
        const resenias = service.find();
        res.json(resenias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reseñas', error });
    }
});

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const resenia = service.findOne(id);
        if (!resenia) {
            return res.status(404).json({ message: 'Reseña no encontrada' });
        }
        res.json(resenia);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la reseña', error });
    }
});

router.post('/', (req, res) => {
    try {
        const body = req.body;
        const nuevaResenia = service.create(body);
        res.status(201).json(nuevaResenia);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la reseña', error });
    }
});

router.patch('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const resenia = service.update(id, body);
        if (!resenia) {
            return res.status(404).json({ message: 'Reseña no encontrada' });
        }
        res.json(resenia);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la reseña', error });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const rta = service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Reseña no encontrada' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la reseña', error });
    }
});

module.exports = router;