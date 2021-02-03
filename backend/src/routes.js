const { Router } = require('express');

const ObraController = require('./controllers/ObraController');

const routes = Router();

routes.get('/store', ObraController.store);
routes.get('/cordeis', ObraController.cordeis);

routes.post('/create_cordel', ObraController.create_cordel);
routes.get('/users_cordeis', ObraController.users_cordeis);

module.exports = routes;