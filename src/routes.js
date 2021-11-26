const { Router } = require('express')

const { verifySession } = require('./middleware/session');

//TODAS AS ROTAS DE SITE QUANTO DA API E DAS FUNÇÕES DO WEB SITE

const { UserController } = require('./controllers/UserController')
const { SessionController } = require('./controllers/SessionController');

const userController  = new UserController();
const sessionController = new SessionController();

const routes = Router();

// ROTAS DE REDIRECIONAMENTO DAS PÁGINAS HTML
routes.get('/', (request, response) => {
     return response.render("login");
});

routes.get('/sessao/logout', sessionController.logout)

routes.post('/sessao', sessionController.create);

routes.get('/cadastrousuario', (request, response) => {
     return response.render("cadastrausuario")
});

routes.post('/users', userController.create);

routes.use(verifySession); // EXISTE SESSÂO?

routes.get('/paginainicial',  (request, response) => {
     return response.render("paginaInicial")
});

routes.get('/contatos', (request, response) => {
     return response.render("pagcontato")
});

routes.get('/pagprodutos', (request, response) => {
     return response.render("pagprod")
});

routes.get('/pagcompras', (request, response) => {
     return response.render("pagcompras")
});

routes.get('/users', userController.show);

module.exports = { routes }