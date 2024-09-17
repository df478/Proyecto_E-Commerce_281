const express = require('express');
const NotificacionService = require('./../services/notificacion.service');
const router = express.Router();
const service = new NotificacionService();

router.get('/', async (req, res) => {
    try {
        const notificaciones = await service.find();
        res.json(notificaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obetener las notificaciones', error  });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const notificacion = await service.findOne(id);
        if (!notificacion) {
            return res.status(404).json({ message: 'Notificación no encontrada' });
        }
        res.json(notificacion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la notificacion', error  });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevaNotificacion = await service.create(body);
        res.status(201).json(nuevaNotificacion);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la notificacion', error  });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const notificacionActualizada = await service.update(id, body);
        if (!notificacionActualizada) {
            return res.status(404).json({ message: 'Notificación no encontrada' });
        }
        res.json(notificacionActualizada);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la notificacion', error  });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Notificación no encontrada' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({  message: 'Error al eliminar la notificacion', error });
    }
});

module.exports = router;

