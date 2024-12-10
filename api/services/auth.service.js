const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { models } = require("../libs/sequelize");

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

  async findOneClienteEmail(email_usuario){
    const cliente = await models.Cliente.findOne({
      where: { email_usuario },
    });
    if (!cliente) {
      throw boom.notFound("Cliente no encontrado");
    }
    return cliente;
  }

  async obtenerPedidosPorUsuario(id_cliente) {
    try {
      const entregas = await models.Entrega.findAll({
        include: {
          model: models.Pedido,  // Suponiendo que tienes un modelo de Pedido
          as: 'pedido'
        },
        where: {
          id_cliente
        }
      });
    
      return entregas;  // Devuelve las entregas que contienen los pedidos
    } catch (error) {
      console.error('Error al obtener los pedidos:', error);
      throw error;  // Vuelve a lanzar el error para que sea manejado más arriba
    }
  }
  
  

  async agregaCarrito(id_usuario) {
    const nuevoData = {
      id_usuario: id_usuario
    };
    const carritoExistente = await models.Carrito.findOne({
      where: { id_usuario: id_usuario }
    }); 
    if (carritoExistente) {
      await carritoExistente.update({ id_usuario: null });
    }
    const nuevoCarrito = await models.Carrito.create(nuevoData);
    
    return nuevoCarrito;
  }

  async encontrarCarrito(id_usuario) {
    try {
      // Busca el carrito asociado al id_usuario
      const carrito = await models.Carrito.findOne({
        where: {
          id_usuario: id_usuario,
        },
      });

      return carrito; // Retorna el carrito encontrado o null si no existe
    } catch (error) {
      // Manejo de errores si es necesario
      throw new Error("Error al buscar el carrito: " + error.message);
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
    // Generar un token de verificación con expiración de 1 hora
    const payload = { sub: user.id_usuario };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
  
    // Crear enlace de verificación
    const link = `https://artiisninc.vercel.app/verify-account?token=${token}`;
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

    //Quitar el Comentario de las lineas de abajo para la verificacion correcta de los usuarios

    if (!user.is_verified) {
        throw boom.unauthorized("Por favor, verifica tu cuenta antes de iniciar sesión");
    }


    const isMatch = await bcrypt.compare(password, user.password_usuario);
    const isMatch2 = password === user.password_usuario

    if (!((isMatch)||(isMatch2))) {
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
    const link = `https://artiisninc.vercel.app/change-password?token=${token}`;
    await this.service.update(user.id_usuario, { recovery_token: token });
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
      if (user.recovery_token !== token) {
        throw boom.unauthorized();
      }

      
      const hash = await bcrypt.hash(newPassword, 10);
      console.log("paso :D");

      await this.service.update(user.id_usuario, {
        recovery_token: null,
        password_usuario: hash,
      });

      return { message: "password changed" };
    } catch (error) {
      throw boom.unauthorized();
    }
  }
  async sendMail(infoMail) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
          user: config.smtpEmail,
          pass: config.smtpPassword,
        },
      });
  
      // Enviar el correo
      await transporter.sendMail(infoMail);
      return { message: "Correo enviado exitosamente" };
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      throw boom.internal("Error al enviar el correo de verificación");
    }
  }
  async verifyAccount(token) {
    try {
        // Verificar el token JWT
        const payload = jwt.verify(token, config.jwtSecret);
        const user = await this.service.findOne(payload.sub); // Encuentra al usuario por ID

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        // Verifica si el usuario ya está verificado
        if (user.is_verified) {
            throw new Error("La cuenta ya está verificada.");
        }

        // Actualiza el estado del usuario para marcarlo como verificado
        user.is_verified = true;
        user.recovery_token = null; // Limpiar el recovery_token después de la verificación
        await user.save();  // Guardar los cambios en la base de datos


        return { message: "Cuenta verificada exitosamente" };
    } catch (error) {
        // Capturar errores y devolver un mensaje adecuado
        throw new Error("Error al verificar cuenta: " + error.message);
    }
}


    
}


module.exports = AuthService;
