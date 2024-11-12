const express = require('express');
const UsuarioService = require('./../services/usuario.service');
const router = express.Router();
const service = new UsuarioService();

router.get('/', async (req, res) => {
    try {
        const usuarios = await service.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await service.findOne(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;

        const nuevoUsuario = await service.create(body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el usuario', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const usuario = await service.update(id, body);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el usuario', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
});

module.exports = router;
