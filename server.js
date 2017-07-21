var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var userdata = require('./userdata.json');
var ctrl = require('./usersCtrl');

var app = express();

app.use(bodyParser.json());



app.get('/api/users', ctrl.getUsers);
app.get('/api/users/:id', ctrl.getUserId);
app.get('/api/:type', ctrl.getAdmins);
// app.get('/api/admins', ctrl.getNonAdmins);





app.listen(port, function() {
    console.log('I got you on port', port);
})