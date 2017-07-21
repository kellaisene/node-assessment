var userData = require('./userdata');
// var {admins} = userData;

module.exports = {
    getUsers: function(req, res){
        if(req.query.favorites){
            var favs = userData.filter(item => item.favorites.includes(req.query.favorites))
            res.status(200).json(favs)
        }
        else if(req.query.age){
            var ages = userData.filter(item => item.age = (req.query.age))
            res.status(200).json(ages)
        }
        else if(req.query.last_name){
            var lastnames = userData.filter(item => item.last_name.includes(req.query.last_name))
            res.status(200).json(lastnames)
        }
        else if(req.query.email){
            var gmail = userData.filter(item => item.email.includes(req.query.email))
            res.status(200).json(gmail)
        }
        else{
         res.status(200).json(userData)
        }
    },

    getUserId: function(req, res){
        console.log(req.params.id)
        var filteredData = userData.filter(item => item.id === parseInt(req.params.id))
        res.status(200).json(filteredData);

        if(filteredData = null){
            console.log(res.status(404).json(null))
        }
            
    },

    getAdmins: function(req, res){
        (req.params.type) = filterAdmin 
        var filterAdmin = userData.filter(item => item.type.includes(req.params.type))
        console.log(req.params.type)
        return res.status(200).send(filterAdmin);

    }
}