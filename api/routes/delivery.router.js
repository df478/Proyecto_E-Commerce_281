const express = require("express");
const DeliveryService = require("./../services/delivery.service");
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new DeliveryService();
const {
  obtenerDeliverySchema,
  crearDeliverySchema,
  actualizarDeliverySchema,
} = require("../schemas/delivery.schema");

const AuthService = require("./../services/auth.service");
const authService = new AuthService("delivery");

router.get("/", async (req, res) => {
  try {
    const deliverys = await service.find();
    res.json(deliverys);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los deliverys", error });
  }
});

router.get(
  "/:id_usuario",
  validatorHandler(obtenerDeliverySchema, "params"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const delivery = await service.findOne(id_usuario);
      if (!delivery) {
        return res.status(404).json({ message: "Delivery no encontrado" });
      }
      res.json(delivery);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el delivery", error });
    }
  }
);

router.post(
  "/",
  validatorHandler(crearDeliverySchema, "body"),
  async (req, res) => {
    try {
      const body = req.body;
      const nuevoDelivery = await service.create(body);
      console.log(nuevoDelivery);
      await authService.sendVerificationEmail(nuevoDelivery);
      res.status(201).json(nuevoDelivery);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el cliente", error });
    }
  }
);

router.patch(
  "/:id_usuario",
  validatorHandler(obtenerDeliverySchema, "params"),
  validatorHandler(actualizarDeliverySchema, "body"),
  async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const body = req.body;
      const delivery = await service.update(id_usuario, body);
      if (!delivery) {
        return res.status(404).json({ message: "Delivery no encontrado" });
      }
      res.json(delivery);
    } catch (error) {
      console.error(error); // Imprimir el error para depuración
      res
        .status(400)
        .json({
          message: "Error al actualizar el delivery",
          error: error.message || error,
        });
    }
  }
);

router.delete("/:id_usuario", 
  validatorHandler(obtenerDeliverySchema, "params"),
  async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const rta = await service.delete(id_usuario);
    if (!rta) {
      return res.status(404).json({ message: "Delivery no encontrado" });
    }
    res.json(rta);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el delivery", error });
  }
});

module.exports = router;
