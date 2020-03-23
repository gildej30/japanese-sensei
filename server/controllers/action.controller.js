const { Action } = require('../models/action.model');

module.exports = {
    getAll: (req, res) => {
        Action.find()
            .then(actions => res.json(actions))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Action.findById()
            .then(action => res.json(action))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Action.create(req.body)
            .then(action => res.json(action))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Action.findByIdAndUpdate(req.params.id)
            .then(action => res.json(action))
            .catch(err => res.status(400).json(err))
    },
    destroy: (req, res) => {
        Action.deleteOne({_id:req.params.id})
            .then(action => res.json(action))
            .then(err => res.status(400).json(err))
    }
}