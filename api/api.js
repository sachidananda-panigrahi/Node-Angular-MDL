
var express    = require('express'),
    Bourne     = require('bourne'),
    bodyParser = require('body-parser'),

    db         = new Bourne('data.json'),
    router     = express.Router();


module.exports = router;
