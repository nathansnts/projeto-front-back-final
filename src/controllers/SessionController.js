const database = require('../database/dbconfig')
const { compare } = require('bcryptjs')
const { alertSuccessNotify, alertErrorNotify, alertErrorSearchUser } = require('../utils/alert')

class SessionController{
    async create(request, response){

        const connection = await database;
    
        const { email, senha } = request.body;
    
        const sql = "SELECT * FROM users WHERE email = ?";
        const value = [email];
        const [ rows ] = await connection.execute(sql, value);
    
        const user = rows[0];
    
        if (!user) {
            console.log('USUARIO NÃO ENCONTRADO')
            return response.render('login', alertErrorSearchUser('/'));
        }
    
        const password = await compare(senha, user.senha);
    
        if(!password) {
            console.log('PASSWORD NÃO COMPATIVEL')
            return response.render('login', alertErrorNotify('/'));
        }

        request.session.authotization = true;

        request.session.cookie.expires = new Date(Date.now() + 1800000) // expira em meia hora

        return response.render('login', alertSuccessNotify('/paginainicial'));
    }

    async logout (request, response) {
        request.session.authotization = false;

        return response.redirect('/');
    }
};

 module.exports = { SessionController };