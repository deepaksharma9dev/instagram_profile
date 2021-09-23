const axios = require('axios');

const getUserMedia = async(req, res, next) => {
    try {
        let instaAccessToken = process.env.longLivedToken; // get from DB
        let resp = await axios.get(`https://graph.instagram.com/me/media?fields=media_type,permalink,media_url,caption,username,timestamp&access_token=${instaAccessToken}`);
        resp = resp.data;
        console.log(resp);
        let instaPhotos = resp.data.filter(d => d.media_type === "IMAGE").map(d => d.media_url);
        // Got insta photos
        console.log(instaPhotos);
        return res.status(200).send("got images");
    } catch (e) {
        console.log(e.response.data.error);
    }

};


module.exports = { getUserMedia };