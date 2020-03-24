const AlphabetController = require('../controllers/alphabet.controller');
// const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/alphabets", AlphabetController.getAll);
    app.get("/api/alphabet/:id", AlphabetController.getOne);
    app.post("/api/alphabet/new", AlphabetController.create);
    app.put("/api/alphabet/:id", AlphabetController.update);
    app.delete("/api/alphabet/:id", AlphabetController.destroy);
}