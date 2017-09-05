const port = require('./config/server').port;

let http = require('http');
let url = require('url');
let express = require('express');

let logger = require('morgan');
let router = require('./router');

let app = express();

// Gestion des vues avec le moteur de template EJS
app.set('views', 'views');
app.set('view engine', 'ejs');
app.set('port', port);

// Log avec morgan
app.use(logger('dev'));
app.use('/assets', express.static('public'));
app.use('/', router);


let server = http.createServer(app);

server.listen(port);
