// Importar a biblioteca json-server
const jsonServer = require('json-server');
const path = require('path');

// Criar uma instância do servidor JsonServer 
const server = jsonServer.create();

// Criar um roteador com o arquivo db.json 
const router = jsonServer.router('db.json');

// Importa os middlewares padrões do JsonServer
const middlewares = jsonServer.defaults({
  // Isso já faz o json-server servir a sua pasta 'public' automaticamente!
  static: path.join(__dirname, 'public')
});

// Configura os middlewares padrões
server.use(middlewares);

// O Render define a porta automaticamente pela variável de ambiente process.env.PORT
// Se não houver (como no seu computador local), ele usa a 3000
const porta = process.env.PORT || 3000;

// Usa o roteador criado
server.use(router);

// Inicia o servidor escutando em '0.0.0.0' (obrigatório para o Render)
server.listen(porta, '0.0.0.0', () => {
    console.log(`JSON SERVER está rodando na porta ${porta}`);
});
