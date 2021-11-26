const mysql = require('mysql2/promise');

async function connect() {

    return await mysql.createConnection({
        host     : 'localhost',
        port     : '3306',
        user     : 'root',
        password : 'root',
        database : 'sistema_vendas_web',
    });
    
}

module.exports = connect();