require('dotenv').config({path: 'variaveis.env'});

const express = require('express'); // Framework que facilita o desenvolvimento em backend

const cors = require('cors'); //Permite acesso p gente trabalhar como API, acessos a recursos de outro site mesmo estando em dominios diferentes

const bodyParser = require('body-parser'); //Módulo capaz de converter o body de uma requisição para varios outros formatos


const routes =require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', routes); // faz com que todos os endereços das rotas tenham o prefixo /api

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`) //apresenta no console qual porta ta rodando a API 
});