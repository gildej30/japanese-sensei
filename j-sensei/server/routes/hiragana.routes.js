const HiraganaController = require('../controllers/hiragana.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/hiragana", authenticate, HiraganaController.getAll);
    app.get("/api/hiragana/:id", authenticate, HiraganaController.getOne);
    app.post("/api/hiragana/new", authenticate, HiraganaController.create);
    app.put("/api/hiragana/:id", authenticate, HiraganaController.update);
    app.delete("/api/hiragana/:id", authenticate, HiraganaController.destroy);
}