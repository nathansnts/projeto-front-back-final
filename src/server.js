const express = require('express');
const session = require('express-session')
const path = require('path')
const { routes } = require('./routes') 

// SERVIDOR DE HOSPODEGEM LOCAL QUE RODA A APLICAÇÃO
// EXECUTAR O COMANDO npm start PARA SUBIR O SERVIDOR LOCAL
const server = express();

server.use(session({ 
    secret: 'd41d8cd98f00b204e9800998ecf8427e',
    resave: true,
    saveUninitialized: true
}))

server.set('view engine', 'ejs');

server.use(express.static('public'));

server.set('views', path.join(__dirname,'views'));

server.use(express.urlencoded({extended: true}));

server.use(express.json());

server.use(routes);

server.listen(8080, () => console.log('BASE DE DADOS CONECTADA COM SUCESSO!'));
