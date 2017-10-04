var data = require('./userData.json');

module.exports = {
    getUsers: function (req,res) {
        if(req.query.age) {
            var years = data.filter(item => item.age < req.query.age)
            res.status(200).json(years)
        } else if (req.query.lastname) {
            var lastname = data.filter(item => item.last_name === req.query.lastname)
            res.status(200).json(lastname)
        } else if (req.query.email) {
            var email = data.filter(item => item.email === req.query.email)
            res.status(200).json(email)
        } else if (req.query.favorites) {
            var favorites = data.filter(item => item.favorites.includes(req.query.favorites))
            res.status(200).json(favorites)
        } else {
            res.status(200).json(data)
        }
    },
    getById: function (req,res) {
        var userId = data.filter(item => item.id == req.params.id)
        // console.log(userId)
        if(userId.length){
            res.status(200).json(userId[0])
        } else {
            res.status(404).json(null)
        }
    },
    getAdmins: function (req,res) {
        var admin = data.filter(item => item.type === "admin")
        res.status(200).json(admin)
    },
    getNonAdmins: function (req,res) {
        var nonAdmin = data.filter(item => item.type !== "admin")
        res.status(200).json(nonAdmin)
    },
    getUserType: function (req,res) {
        var userType = data.filter(item => item.type === req.params.userType)
        res.status(200).json(userType)
    },
    updateUser: function (req,res) {
        data = data.map( item => {
            if (item.id == req.params.userId){
                item = req.body
            }
            return item
        })
        res.status(200).json(data)
    },
    addUser: function (req,res) {
        if(!req.body.id) {
            req.body.id = data[data.length -1].id +1}
        data.push(req.body);
        res.status(200).json(data)
    },
    deleteUser: function (req,res) {
        data = data.filter(item => item.id != req.params.id)
        res.status(200).json(data)
    }
}