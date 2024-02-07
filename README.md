# 🚗 API de Cadastro de Modelo e Placa de Carros 🚗

Bem-vindo ao repositório da  API de cadastro de modelos e placas de carros! Esta API foi construída usando Node.js e Express.js.

Banco de dados em MySQL;

## 🚀 Começando

Estas instruções vão fazer com que você tenha uma cópia do projeto rodando na sua máquina local para fins de desenvolvimento e teste. Vamos lá?

### 📋 Pré-requisitos

O que você precisa para rodar o software:

- Node.js
- npm

### 🔧 Instalação

1. Clone o repositório
2. Entre no diretório do projeto
3. Instale as dependências
4. Inicie o servidor

E voilà! O servidor está em execução em `http://localhost:3000`

## 📚 Uso

Aqui estão alguns exemplos de como usar esta API:

- Para obter todos os carros:

GET /api/carros

- Para obter um carro somente: 

GET /api/carro/:codigo

- Para adicionar um novo carro:

POST /api/carros

- Para deletar um  carro:

DELETE /api/carros
