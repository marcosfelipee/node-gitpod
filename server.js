// import express from 'express';
// import bodyParser from 'body-parser';
var express = require ('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

//PERSISTÊNCIA
mongoose.connect('mongodb+srv://marcos:bolseiro@cluster0-qtxkw.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true});

//Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta via arquivo de configuração
var port = process.env.port || 3000;

//ROTAS
//var indexRoute = require("./src/routes/index-routes");
const productRoute = require("./src/routes/product-routes");
const userRoute = require("./src/routes/user-routes");
const signupRoute = require("./src/routes/signup-route");

//Vincular a aplicacao (app) com o motor de rotas
//app.use('/api', indexRoute);
//Rotas para produtos
app.use('/api/products', productRoute);
//Rotas para usuários
app.use('/api/users', userRoute);
//Rotas para registro
app.use('/api/register', signupRoute);
//Rotas para login
app.use('/api/login', signupRoute);

app.listen(port, () => {
    console.log('Server up and running!');

});

