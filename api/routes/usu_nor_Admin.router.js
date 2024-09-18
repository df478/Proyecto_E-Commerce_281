const express = require("express");
const UsuNorAdminService = require("./../services/usu_nor_admin.service"); 
const validatorHandler = require( "./../middlewares/validator.handler ");
const router = express.Router();
const service = new UsuNorAdminService();
const {
    obtenerUsuNorAdminSchema,
    crearUsuNorAdminSchema,
    actualizarUsuNorAdminSchema,
  } = require( "./../schemas/usu_nor_admin.schema ");
  
  router.get( "/ ", async (req, res) => {
    try {
      const usuarios = await service.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message:  "Error al obtener los usuarios ", error });
    }
  });
  
  router.get(
     "/:id_usuario/:id_usuario2 ",
    validatorHandler(obtenerUsuNorAdminSchema,  "params "),
    async (req, res) => {
      try {
        const { id_usuario, id_usuario2 } = req.params;
        const usuario = await service.findOne(id_usuario, id_usuario2);
        if (!usuario) {
          return res.status(404).json({ message:  "Usuario no encontrado " });
        }
        res.json(usuario);
      } catch (error) {
        res.status(500).json({ message:  "Error al obtener el usuario ", error });
      }
    }
  );
  
  router.post(
     "/ ",
    validatorHandler(crearUsuNorAdminSchema,  "body "),
    async (req, res) => {
      try {
        const body = req.body;
        const nuevoUsuario = await service.create(body);
        res.status(201).json(nuevoUsuario);
      } catch (error) {
        res.status(400).json({ message:  "Error al crear el usuario ", error });
      }
    }
  );
  
  router.patch(
     "/:id_usuario/:id_usuario2 ",
    validatorHandler(obtenerUsuNorAdminSchema,  "params "),
    validatorHandler(actualizarUsuNorAdminSchema,  "body "),
    async (req, res) => {
      try {
        const { id_usuario, id_usuario2 } = req.params;
        const body = req.body;
        const usuario = await service.update(id_usuario, id_usuario2, body);
        if (!usuario) {
          return res.status(404).json({ message:  "Usuario no encontrado " });
        }
        res.json(usuario);
      } catch (error) {
        console.error(error);
        res
          .status(400)
          .json({
            message: "Error al actualizar al usu_Nor_Admin",
            error: error.message || error,
          });
      }
    }
  );
  
  router.delete( "/:id_usuario/:id_usuario2 ", async (req, res) => {
    try {
      const { id_usuario, id_usuario2 } = req.params;
      const rta = await service.delete(id_usuario, id_usuario2);
      if (!rta) {
        return res.status(404).json({ message:  "Usuario no encontrado " });
      }
      res.json(rta);
    } catch (error) {
      res.status(500).json({ message:  "Error al eliminar el usuario ", error });
    }
  });
  
  module.exports = router;
  