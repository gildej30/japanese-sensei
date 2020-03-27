const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports = {
    getOne: (req, res) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        User.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
    },
    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user === null) {
                    res.json({ msg: "Invalid email/password" });
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if (passwordIsValid) {
                                const secret = "3d9s4#@4lk@12r";
                                const newJWT = jwt.sign({_id: user._id, nickname: user.nickname}, secret);
                                res.cookie("usertoken", newJWT, {
                                        httpOnly: true
                                    })
                                    .json({ msg: "success" });
                            } else {
                                res.json({ msg: "Invalid email/password" });
                            }
                        })
                        .catch(err => {
                            res.json({ msg: "Invalid email/password" });
                        });
                }
            })
            .catch(err => res.json(err));
    },

    register: (req, res) => {
        const newUser = new User(req.body);
        newUser.save()
            .then(() => res.json({ msg: "success", user: newUser }))
            .catch(err => res.status(400).json(err))
    },

    logout: (req, res) => {
        res.clearCookie("usertoken").json({ msg: "Come back soon!" });
    }
}