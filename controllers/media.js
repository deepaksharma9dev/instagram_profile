const axios = require('axios');
const fs = require('fs');

const getUserMedia = async(req, res, next) => {
    try {
        let instaAccessToken = process.env.longLivedToken; // get from DB
        let resp = await axios.get(`https://graph.instagram.com/me/media?fields=media_type,permalink,media_url,caption,username,timestamp&access_token=${instaAccessToken}`);
        resp = resp.data;
        console.log(resp);
        fs.writeFileSync('photos.json', JSON.stringify(resp));
        return res.status(200).send(resp);
    } catch (e) {
        console.log(e.response.data.error);
    }
};


module.exports = { getUserMedia };