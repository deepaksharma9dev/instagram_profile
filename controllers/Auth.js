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
            url: 'https://api.instagram.com/oauth/access_token',
            form: {
                client_id: process.env.client_id,
                client_secret: process.env.client_secret,
                grant_type: 'authorization_code',
                redirect_uri: process.env.AuthRedirect,
                code: process.env.code
            }
        });
        accessToken = (result);
        return res.status(200).send(accessToken);
        // res.send("working", );
    } catch (error) {
        console.log(error);
        console.error(error.message);
    }
};

const getLongLivedToken = async(req, res, next) => {
    try {
        let oldAccessToken = {
            "uri": {
                "protocol": "https:",
                "slashes": true,
                "auth": null,
                "host": "api.instagram.com",
                "port": 443,
                "hostname": "api.instagram.com",
                "hash": null,
                "search": null,
                "query": null,
                "pathname": "/oauth/access_token",
                "path": "/oauth/access_token",
                "href": "https://api.instagram.com/oauth/access_token"
            },
            "method": "POST",
            "headers": {
                "host": "api.instagram.com",
                "content-type": "application/x-www-form-urlencoded",
                "content-length": 411
            }
        };
        let resp = await axios.get(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&&client_secret=${process.env.client_secret}&access_token=${oldAccessToken}`)
        if (resp.data.access_token) {
            let newAccessToken = resp.data.access_token;
            console.log(newAccessToken);
        }
    } catch (e) {
        console.log(e);
        console.log("Error=====", e.response.data);
    }
};

module.exports = { getAuthCode, getShortLivedAccToken, getLongLivedToken };