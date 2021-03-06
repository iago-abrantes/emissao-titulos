const cors = require('cors');
const express = require('express');
const corsApp = express();

corsApp.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header('Access-Control-Allow-Origin', '*');
  //Quais são os métodos que a conexão pode realizar na API
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  corsApp.use(cors());
  next();
});

module.exports = corsApp;
