const ActionController = require('../controllers/action.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/actions", authenticate, ActionController.getAll);
    app.get("/api/action/:id", authenticate, ActionController.getOne);
    app.post("/api/action/new", authenticate, ActionController.create);
    app.put("/api/action/:id", authenticate, ActionController.update);
    app.delete("/api/action/:id", authenticate, ActionController.destroy);
}