const express = require("express");
const passport = require("passport");
const AuthService = require("../services/auth.service");
// const service = new AuthService();

const router = express.Router();
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const service = new AuthService(user.tipo_usuario);

      // Inicializa la respuesta con el token
      const response = {
        token: service.signToken(user),
        carrito: null,  // Inicializa 'carrito' como null
        message: "Login exitoso",  // Mensaje común
      };

      // Verifica si el tipo de usuario es 'cliente'
      if (user.tipo_usuario === 'cliente') {
        // Si es cliente, busca el email en el cuerpo
        const { email_usuario } = req.body; 

        // Busca al cliente utilizando el email
        const usuario = await service.findOneClienteEmail(email_usuario);
        if (!usuario) {
          return res.status(404).json({ message: "Cliente no encontrado" });
        }

        // Verifica si ya existe un carrito para el cliente
        const carritoExistente = await service.encontrarCarrito(usuario.id_usuario);
        
        if (carritoExistente) {
          // Si ya hay un carrito existente, lo asigna a la respuesta
          response.carrito = carritoExistente;  // Asigna el carrito existente
          response.message += " y carrito existente gestionado";  // Modifica el mensaje
        } else {
          // Si no hay carrito existente, crea uno nuevo
          const nuevoCliente = await service.agregaCarrito(usuario.id_usuario);
          response.carrito = nuevoCliente;  // Asigna el nuevo carrito
          response.message += " y carrito gestionado";  // Modifica el mensaje
        }

        return res.status(201).json(response);  // Devuelve la respuesta completa
      } else {
        // Si no es cliente, simplemente firma el token
        return res.json(response);  // Devuelve el mismo objeto sin carrito
      }
    } catch (error) {
      next(error);
    }
  }
);



router.post("/recovery", async (req, res, next) => {
  try {
    const { email_usuario, tipo_usuario } = req.body;
    const service = new AuthService(tipo_usuario);
    const rta = await service.sendRecovery(email_usuario);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

router.post("/change-password", async (req, res, next) => {
  try {
    const { recovery_token, password_usuario, tipo_usuario } = req.body;
    console.log(recovery_token);
    console.log(password_usuario);
    console.log(tipo_usuario);
    
    
    const service = new AuthService(tipo_usuario);
    const rta = await service.changePassword(recovery_token, password_usuario);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
