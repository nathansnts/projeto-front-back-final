const db = require('./dbconfig')

// CRIAÇÃO DE TABELAS DIRETAMENTE NO BANCO DE DADOS
const database = {
    async init() {

        const connection = await db;

        connection.connect();
        
        //    MINHAS QUERYS

        // await connection.query(`DROP TABLE IF EXISTS users`);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users(
                id int AUTO_INCREMENT PRIMARY KEY,
                nome varchar(200) NOT NULL,
                email varchar(200) UNIQUE,
                senha varchar(200) NOT NULL
            );`
            
        );

        connection.end();
    }
}

database.init();