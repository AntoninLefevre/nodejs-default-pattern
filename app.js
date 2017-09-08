const port = require('./config/server').port;


let http = require('http'),
    url = require('url'),
    express = require('express'),
    logger = require('morgan'),
    mysql = require('mysql').createConnection(require('./config/sql')) ;


let app = express();
let server = http.createServer(app);


/***************************/
/* Configuration d'express */
/***************************/

// Gestion des vues avec le moteur de template EJS
app.set('view engine', 'ejs');

// Log avec morgan
app.use(logger('dev'));
app.use('/assets', express.static('public'));
app.use('/', require('./routes/index'));


// Connexion a MySQL
mysql.connect();


server.listen(port);
