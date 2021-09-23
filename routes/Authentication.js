const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const Router = require('express').Router();

const { getAuthCode, getShortLivedAccToken } = require('../controllers/Auth');


Router.get("/get-auth-code", getAuthCode);


Router.get('/get-auth-token', getShortLivedAccToken);



module.exports = Router;