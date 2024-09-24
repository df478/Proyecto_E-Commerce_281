const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { config } = require("../config/config");

// const UserService = require('./users.service');
// const service = new UserService();

const clienteService = require("./cliente.service");
const deliveryService = require("./delivery.service");
const artesanoService = require("./artesano.service");
const administradorService = require("./administrador.service");

class AuthService {
  constructor(tipo_usuario) {
    if (tipo_usuario === "cliente") {
      this.service = new clienteService();
    } else if (tipo_usuario === "delivery") {
      this.service = new deliveryService();
    } else if (tipo_usuario === "administrador") {
      this.service = new administradorService();
    } else if (tipo_usuario === "artesano") {
      this.service = new artesanoService();
    }
  }

  async register(userData) {
    // Crear el usuario
    const user = await this.service.create(userData);

    // Enviar correo de verificación
    await this.sendVerificationEmail(user);

    return user;
  }

  async sendVerificationEmail(user) {
    // Generar un token de verificación
    const payload = { sub: user.id_usuario };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });

    
    // Crear enlace de verificación
    const link = `http://localhost:3000/verify-account?token=${token}`;
    console.log("------------token", token);
    
    // Configurar el correo
    const mail = {
      from: config.smtpEmail,
      to: user.email_usuario,
      subject: "Verificación de cuenta",
      html: `<b>Por favor verifica tu cuenta haciendo clic en este enlace: <a href="${link}">Verificar cuenta</a></b>`,
    };

    // Enviar el correo
    const rta = await this.sendMail(mail);
    return rta;
  }

  async getUser(email, password) {
    const user = await this.service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password_usuario);

    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id_usuario,
      role: user.tipo_usuario,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendRecovery(email) {
    const user = await this.service.findByEmail(email);

    if (!user) {
      throw boom.unauthorized();
    }
    const payload = { sub: user.id_usuario };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "15min" });
    const link = `http://http://localhost:3000/change-password?token=${token}`;
    await this.service.update(user.id_usuario, { recoveryToken: token });
    const mail = {
      from: config.smtpEmail,
      to: `${user.email_usuario}`,
      subject: "Email para recuperar contraseña",
      html: `<b>Ingresa a este link => ${link}</b>`,
    };
    console.log(mail);

    const rta = await this.sendMail(mail);
    return rta;
  }
  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await this.service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await this.service.update(user.id, {
        recoveryToken: null,
        password: hash,
      });

      return { message: "password changed" };
    } catch (error) {
      throw boom.unauthorized();
    }
  }
  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });
    await transporter.sendMail(infoMail);
    return { message: "mail sent" };
  }
}

module.exports = AuthService;
