let http = require('http');
let express = require('express');
let logger = require('morgan');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');