const mysql = require('mysql2/promise');

async function getConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'grupo',
        password: 'admin123',
        database: 'my_store'
    });
    return connection;
}

module.exports = getConnection;