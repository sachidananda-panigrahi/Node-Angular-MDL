
var express    = require('express'),
    Bourne     = require('bourne'),
    bodyParser = require('body-parser'),

    db         = new Bourne('airports.json'),
    router     = express.Router();

router.use(bodyParser.json())
    .route('/cities')
    .get(function (req, res) {
        console.log("req rec");
        db.find({},function (err, data) {
            console.log("data");
            res.json(data);
        });
    });


module.exports = router;
