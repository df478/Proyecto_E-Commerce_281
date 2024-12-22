const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
              require: true, // This forces SSL connection
              rejectUnauthorized: false, // Optional: allows self-signed certificates
            },
          },
    },
    production: {
        uri: URI,
        dialect: 'postgres'
    }
}