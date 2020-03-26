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
    getSome: (req, res) => {
        const lessonSets = [
            ["a", "e", "i", "o" ,"u"],
            ["ka", "ke", "ki", "ko" ,"ku"],
            ["ka", "ke", "ki", "ko" ,"ku", "a", "e", "i", "o" ,"u"],
            ["sa", "se", "shi", "so" ,"su"],
            ["ta", "te", "chi", "to" ,"tsu"],
            ["sa", "se", "shi", "so" ,"su", "ta", "te", "chi", "to" ,"tsu"],
            ["na", "ne", "ni", "no" ,"nu"],
            ["ha", "he", "hi", "ho" ,"hu"],
            ["na", "ne", "ni", "no" ,"nu", "ha", "he", "hi", "ho" ,"hu"],
            ["a", "e", "i", "o" ,"u"],
            ["ka", "ke", "ki", "ko" ,"ku"],
            ["ka", "ke", "ki", "ko" ,"ku", "a", "e", "i", "o" ,"u"],
        ];

        Hiragana.find({ romanji: { $in: lessonSets[req.params.lesson] }})
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