const { Strategy } = require('passport-local');

const AuthService = require('../../../services/auth.service');

const LocalStrategy = new Strategy(
  {
    usernameField: 'email_usuario',
    passwordField: 'password_usuario',
    passReqToCallback: true,
  },
  async (req, email, password, done) => {
    try {
      
      const role = req.body.tipo_usuario; // Access the role from the request context
      const service = new AuthService(role)
      const user = await service.getUser(email, password)
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  },

 
);

module.exports = LocalStrategy;