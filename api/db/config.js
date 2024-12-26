const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}?ssl=true`;

module.exports = {
    development: {
        url: URI,
        dialect: 'postgresql',
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          }
    },
    production: {
        uri: URI,
        dialect: 'postgresql'
    }
}