const { mysql } = require('mysql2/promise');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = mysql.createPool({
    host: config.dbHost,
    user: config.dbUSer,
    password: config.dbPassword,
    database: config.dbName,
    port: config.dbPort,
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0
})
module.exports = pool;