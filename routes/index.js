let express = require('express');
let router = express.Router();

router
    .get('/',(req, res) => res.render('index', { title: 'Pattern par défaut'}));

module.exports = router;