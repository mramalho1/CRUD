// Importa as bibliotecas
const jsonServer = require('json-server');
const express = require('express');

// Cria a instância do servidor
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Define a porta (preparado para o Render e Local)
const porta = process.env.PORT || 3000;

// Usa os middlewares padrão do json-server
server.use(middlewares);

// Configura o servidor para usar a pasta 'public' (Tudo unificado no 'server')
server.use(express.static('public'));

// Define a rota principal enviando o index.html
server.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// IMPORTANTE: O router DEVE ser configurado por último!
// Se ele ficar antes do 'express.static', o json-server bloqueia o front-end.
server.use(router);

// Inicia o servidor
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
