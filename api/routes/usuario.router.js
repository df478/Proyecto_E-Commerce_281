const express = require('express');
const router = express.Router();

const UsuarioService = require('../services/usuario.service');
const service = new UsuarioService();

router.get('/', async (req, res, next) => {
    try {
        const usuarios = await service.find();
        res.status(200).json(usuarios);
    } catch (error) {
        next(error);
    }
});

router.get(
    '/:id_usuario',
    validatorHandler(getUsuarioSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_usuario } = req.params;
            const usuario = await service.findOne(id_usuario);
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    }
);

router.post(
    '/',
    validatorHandler(createUsuarioSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newUsuario = await service.create(body);
            res.status(201).json(newUsuario);
        } catch (error) {
            next(error);
        }
    }
);

router.patch(
    '/:id_usuario',
    validatorHandler(getUsuarioSchema, 'params'),
    validatorHandler(updateUsuarioSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_usuario } = req.params;
            const body = req.body;
            const updatedUsuario = await service.update(id_usuario, body);
            if (updatedUsuario) {
                res.status(200).json(updatedUsuario);
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    }
);

router.delete(
    '/:id_usuario',
    validatorHandler(getUsuarioSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_usuario } = req.params;
            const result = await service.delete(id_usuario);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
