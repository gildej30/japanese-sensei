const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.post(`/api/login`, UserController.login);
    app.post(`/api/register`, UserController.register);
    app.get(`/api/logout`, UserController.logout);
}