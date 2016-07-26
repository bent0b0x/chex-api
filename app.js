var express = require('express'),
    morgan = require('morgan'),
    routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(routes());

module.exports = app;