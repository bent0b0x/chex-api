var express = require('express'),
    routes = require('./routes');

const app = express();

app.use(routes);

module.exports = app;