const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const Router = require('express').Router();

const { getAuthCode, getShortLivedAccToken, getLongLivedToken } = require('../controllers/Auth');


Router.get("/get-auth-code", getAuthCode);


Router.get('/get-auth-token', getShortLivedAccToken);


Router.get('/get-long-lived-token', getLongLivedToken);



module.exports = Router;