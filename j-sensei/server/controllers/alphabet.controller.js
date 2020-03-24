const { Alphabet } = require('../models/alphabet.model');

module.exports = {
    getAll: (req, res) => {
        Alphabet.find()
            .then(alphabets => res.json(alphabets))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Alphabet.findById()
            .then(alphabet => res.json(alphabet))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Alphabet.create(req.body)
            .then(alphabet => res.json(alphabet))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Alphabet.findByIdAndUpdate(req.params.id)
            .then(alphabet => res.json(alphabet))
            .catch(err => res.status(400).json(err))
    },
    destroy: (req, res) => {
        Alphabet.deleteOne({_id:req.params.id})
            .then(alphabet => res.json(alphabet))
            .then(err => res.status(400).json(err))
    }
}