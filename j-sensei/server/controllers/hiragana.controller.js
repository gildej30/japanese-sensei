const { Hiragana } = require('../models/hiragana.model');

module.exports = {
    getAll: (req, res) => {
        Hiragana.find()
            .then(hiragana => res.json(hiragana))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Hiragana.findById(req.params.id)
            .then(hiragana => res.json(hiragana))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Hiragana.create(req.body)
            .then(hiragana => res.json(hiragana))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Hiragana.findByIdAndUpdate(req.params.id)
            .then(hiragana => res.json(hiragana))
            .catch(err => res.status(400).json(err))
    },
    destroy: (req, res) => {
        Hiragana.deleteOne({_id:req.params.id})
            .then(hiragana => res.json(hiragana))
            .then(err => res.status(400).json(err))
    }
}