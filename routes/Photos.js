const Router = require('express').Router();

const { getUserMedia } = require('../controllers/media');

Router.get('/get-user-pictures', getUserMedia);

module.exports = Router;