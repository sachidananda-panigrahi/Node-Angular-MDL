/**
 * Created by Sachidananda.Panigra on 8/26/2015.
 */
var express = require('express'),
    api     = require('./api/api'),
    users   = require('./accounts/accounts'),
    app     = express();

app.use(express.static('./public'))
    .use(users)
    .use('/api', api)
    .get('*', function (req, res) {
        if (!req.user) {
         res.redirect('/login');
         } else {
         res.sendFile('public/main.html', {"root": "."});
         }
    })
    .listen(5000);
console.log("Server is listing on the port 5000");
