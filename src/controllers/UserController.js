const database = require('../database/dbconfig')
const { hash } = require('bcryptjs');
const { alertSucessRegistration, alertErrorRegistration } = require('../utils/alert');

//TODAS AS AÇÕES QUE SERÃO FEITAS NO BANCO DE DADOS 

class UserController {
    async create(request, response) {

            const connection = await database;

            const { nome, email, senha, confirmasenha } = request.body

            const passwordHash = await hash(senha, 8);

            const sql = 'INSERT INTO users(nome, email, senha) VALUES(?, ?, ?)';
            const values = [nome, email, passwordHash];

            if (confirmasenha === senha) {

            await connection.execute(sql, values);

            return response.render("cadastrausuario", alertSucessRegistration('/'))

            } else {

            return response.render("cadastrausuario", alertErrorRegistration('cadastrousuario'))
            
            }
    }

    async show(request, response) {
        const querySql = 'SELECT * FROM users';

        const [data, ] = await connection.execute(querySql);
   
        console.log(data)
   
        return response.render('index', {data});
    }

}

module.exports = { UserController }