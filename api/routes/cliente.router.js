const express = require("express");
const ClienteService = require("./../services/cliente.service");
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new ClienteService();
const {
  obtenerClienteSchema,
  crearClienteSchema,
  actualizarClienteSchema,
} = require("../schemas/cliente.schema");
const AuthService = require("./../services/auth.service");
const authService = new AuthService("cliente");

router.get("/", async (req, res) => {
  try {
    const clientes = await service.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los clientes", error });
  }
});

router.get(
  "/:id_usuario",
  validatorHandler(obtenerClienteSchema, "params"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const cliente = await service.findOne(id_usuario);
      if (!cliente) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el cliente", error });
    }
  }
);

router.post(
  "/",
  validatorHandler(crearClienteSchema, "body"),
  async (req, res) => {
    try {
      const body = req.body;
      const nuevoCliente = await service.create(body);
      console.log(nuevoCliente);
      await authService.sendVerificationEmail(nuevoCliente);
      res.status(201).json(nuevoCliente);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el cliente", error });
    }
  }
);

router.patch(
  "/:id_usuario",
  validatorHandler(obtenerClienteSchema, "params"),
  validatorHandler(actualizarClienteSchema, "body"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const body = req.body;
      const cliente = await service.update(id_usuario, body);
      if (!cliente) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      res.json(cliente);
    } catch (error) {
      console.error(error); // Imprimir el error para depuración
      res.status(400).json({
        message: "Error al actualizar el cliente",
        error: error.message || error,
      });
    }
  }
);

router.delete(
  "/:id_usuario",
  validatorHandler(obtenerClienteSchema, "params"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const rta = await service.delete(id_usuario);
      if (!rta) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      res.json(rta);
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el cliente", error });
    }
  }
);

module.exports = router;
