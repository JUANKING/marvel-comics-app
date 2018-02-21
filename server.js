'use strict';
const express     = require('express');
const app         = module.exports =  express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const config      = require('./config');
const apiRoutes   = require('./app/router/router')

app.set('superSecret', config.secret);

console.log("Your MARVEL public key: "+ config.MARVEL_PUBLIC_KEY);
console.log("Your MARVEL private key: "+ config.MARVEL_PRIVATE_KEY);

const port = process.env.PORT || 8080; 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(port);

app.use('/', apiRoutes);