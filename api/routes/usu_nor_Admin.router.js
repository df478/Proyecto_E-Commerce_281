const express = require('express');
const UsuNorAdminService = require('./../services/usu_nor_admin.service'); 
const router = express.Router();
const service = new UsuNorAdminService();

router.get('/', (req, res) => {
    try {
        const usuNorAdmins = service.find();
        res.json(usuNorAdmins);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las relaciones usu_nor_admin', error });
    }
});

router.get('/:id_usuario/:id_usuario2', (req, res) => {
    try {
        const { id_usuario, id_usuario2 } = req.params;
        const usuNorAdmin = service.findOne(parseInt(id_usuario), parseInt(id_usuario2));
        if (!usuNorAdmin) {
            return res.status(404).json({ message: 'Relación usu_nor_admin no encontrada' });
        }
        res.json(usuNorAdmin);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la relación usu_nor_admin', error });
    }
});

router.post('/', (req, res) => {
    try {
        const body = req.body;
        const nuevaUsuNorAdmin = service.create(body);
        res.status(201).json(nuevaUsuNorAdmin);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la relación usu_nor_admin', error });
    }
});

router.patch('/:id_usuario/:id_usuario2', (req, res) => {
    try {
        const { id_usuario, id_usuario2 } = req.params;
        const body = req.body;
        const usuNorAdmin = service.update(parseInt(id_usuario), parseInt(id_usuario2), body);
        if (!usuNorAdmin) {
            return res.status(404).json({ message: 'Relación usu_nor_admin no encontrada' });
        }
        res.json(usuNorAdmin);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la relación usu_nor_admin', error });
    }
});

router.delete('/:id_usuario/:id_usuario2', (req, res) => {
    try {
        const { id_usuario, id_usuario2 } = req.params;
        const rta = service.delete(parseInt(id_usuario), parseInt(id_usuario2));
        if (!rta) {
            return res.status(404).json({ message: 'Relación usu_nor_admin no encontrada' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la relación usu_nor_admin', error });
    }
});

module.exports = router;
