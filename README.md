# API-RESTfull-Ts

Este é um projeto desenvolvido com Node.js e o framework Express.js para gerenciamento de filmes.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```terminal
npm install
```

## Configuração

Antes de executar o projeto, você precisará configurar algumas variáveis de ambiente em um arquivo ```.env```. Para isso, crie o arquivo .env na raiz do projeto e adicione as seguintes variáveis:

```terminal
DB_USER=
DB_PASS=
```
Altere os valores acima para o seu usuário e sua senha do MongoDB
Altera a porta no arquivo default.ts que está na pasta /config

```terminal
port: 3000
```

Altere o valor de ```PORT``` para a porta que deseja utilizar para executar o servidor.

## Execução

Para executar o projeto, execute o seguinte comando:

```terminal
npm run dev
```
