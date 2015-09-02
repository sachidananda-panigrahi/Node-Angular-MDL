/**
 * Created by Sachidananda on 29-08-2015.
 */
var express    = require('express'),
    Bourne     = require('bourne'),
    bodyParser = require('body-parser'),

    db         = new Bourne('data.json'),
    router     = express.Router();

router.use(bodyParser.json())
    .route('/contact')
    .get(function(req,res){
        db.find({userId: parseInt(req.user.id, 10) }, function(err, data){
            res.json(data);
        })
    })
    .post(function(req,res){
        var contact = req.body;
        contact.userId = req.user.id;

        db.insert(contact, function (err, data) {
            res.json(data);
        });
    });