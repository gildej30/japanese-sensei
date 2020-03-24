const Action = require('../models/action.model');

module.exports = {

    index: (req, res) => {
        Action.find()
            .then(actions => res.json(actions))
            .catch(err => res.status(400).json(err.errors))
    },

    show: (req, res) => {
        Action.findById({_id:req.params.id})
            .then(action => res.json(action))
            .catch(err => res.status(400).json(err.errors))
    },

    create: (req, res) => {
        Action.create(req.body)
            .then(action => res.json(action))
            .catch(err => res.status(400).json(err.errors))
    },

    update: (req, res) => {
        Action.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators: true})
            .then(action => res.json(action))
            .catch(err => res.status(400).json(err.errors))
    },

    destroy: (req, res) => {
        Action.deleteOne({_id:req.params.id})
            .then(action => res.json(action))
            .catch(err => res.status(400).json(err.errors))
    }
}