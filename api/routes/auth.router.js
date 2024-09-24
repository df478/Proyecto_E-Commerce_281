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

      res.json(service.signToken(user));
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
