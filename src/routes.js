const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const treeController = require('./controllers/treeController');
const routes = express.Router();

routes.get('/coordinates', treeController.index);

routes.post('/coordinates', celebrate({
    [Segments.BODY]: Joi.object().keys({
        lat: Joi.string().required(),
        lng: Joi.string().required(),
    })
}), treeController.create);


module.exports = routes;
