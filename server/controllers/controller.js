const User = require('../models/user-model')

exports.test = function (req, res) {
    res.send('Test controller is OK!')
}

exports.user_create = function () {
    var user = new User(
        {
            email: req.body.email,
            password: req.body.password,
            option: req.body.selectedOption
        }
    )
    user.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send('User created successfully')
    })
}

exports.user_details = function () {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err)
        }
        res.send(user)
    })
}

exports.user_update = function () {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
        if (err) {
            return next(err)
        }
        res.send('User updated')
    })
}

exports.user_delete = function () {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err)
        }
        res.send('Deleted successfully!')
    })
}