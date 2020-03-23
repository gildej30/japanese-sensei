const ActionController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get('/api/actions', ActionController.index)
    app.get('/api/action/:id', ActionController.show)
    app.post('/api/action', ActionController.create)
    app.put('/api/actions/:id', ActionController.update)
    app.delete('/api/action/:id', ActionController.destroy)
}