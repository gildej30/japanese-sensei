const HiraganaController = require('../controllers/hiragana.controller');
// const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/hiragana", HiraganaController.getAll);
    app.get("/api/hiragana/dictionaries/:lesson", HiraganaController.getSome);
    app.get("/api/hiragana/:id", HiraganaController.getOne);
    app.post("/api/hiragana/new", HiraganaController.create);
    app.put("/api/hiragana/:id", HiraganaController.update);
    app.delete("/api/hiragana/:id", HiraganaController.destroy);
}