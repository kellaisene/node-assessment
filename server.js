var express = require('express');
var bodyParser = require('body-parser');
var data = require('./userData.json');
var ctrl = require('./usersCtrl.js');

var app = express();
var port = 3000;

//Middleware
app.use(bodyParser.json())

//Endpoints
app.get('/api/users', ctrl.getUsers)
app.get('/api/users/:id', ctrl.getById)
app.get('/api/admins', ctrl.getAdmins)
app.get('/api/nonadmins', ctrl.getNonAdmins)
app.get('/api/user_type/:userType', ctrl.getUserType)

app.put('/api/users/:userId', ctrl.updateUser)

app.post('/api/users', ctrl.addUser)

app.delete('/api/users/:id', ctrl.deleteUser)






app.listen(port, function() {
    console.log('Yo, I got you on port', port);
})