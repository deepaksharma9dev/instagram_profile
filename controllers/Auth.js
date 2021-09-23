// for getting a auth code

const axios = require("axios");
const request = require("request");


const getAuthCode = async(req, res, next) => {
    return res.send(
        `<a href='https://api.instagram.com/oauth/authorize?client_id=${process.env.client_id}&redirect_uri=${process.env.AuthRedirect}&scope=user_media,user_profile&response_type=code'> Connect to Instagram </a>`
    );
};

//for getting short lived access token
const getShortLivedAccToken = async(req, res, next) => {
    try {
        let result = await request.post({
            url: 'https://api.instagram.com/oauth/access_token/',
            form: {
                client_id: process.env.client_id,
                client_secret: process.env.client_secret,
                grant_type: 'authorization_code',
                redirect_uri: process.env.AuthRedirect,
                code: process.env.code
            }
        });

        // Got access token. Parse string response to JSON
        accessToken = (result);
        return res.status(200).send(accessToken);
        // res.send("working", );
    } catch (error) {
        console.log(error);
        console.error(error.message);
    }
};



module.exports = { getAuthCode, getShortLivedAccToken };