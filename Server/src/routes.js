const express = require('express');
const routes = express.Router();
const Usuario = require('./controllers/users.controllers')

routes.get('/', Usuario.index);


// Rotas de Usuarios
routes.post('/create', Usuario.create); //criar
routes.get('/usuarios', Usuario.index); // listar
routes.get('/:nome_usuario', Usuario.details);// detalhes
routes.delete('/delete/:_id',Usuario.delete);// deleta

module.exports = routes;
