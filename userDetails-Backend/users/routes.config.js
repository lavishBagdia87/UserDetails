const UsersController = require('./controllers/users.controller');


exports.routesConfig = function (app) {
    app.post('/users', [
        UsersController.insert
    ]);
    app.get('/users', [
        UsersController.list
    ]);
    app.delete('/users/:userId', [
        UsersController.removeById
    ]);

}
