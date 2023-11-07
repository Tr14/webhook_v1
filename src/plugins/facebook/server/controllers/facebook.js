'use strict';

const axios = require('axios');

module.exports = ({ strapi }) => ({
  async homepage(ctx) {
    let pageToken;
    var url = ctx.request.url
    const regex = /(?<=\?code=).*/gm
    if (url.match(regex) == null) {
      ctx.body = "Hello from AKA Facebook"
    }
    if (url.match(regex) != null) {
      let result = url.match(regex).toString()
      let client_id = "843916146887327"
      let redirect_uri = "http://localhost:1337/api/facebook/homepage"
      let client_secret = "dcd3e07276cae9b514a404dc8c83e8ef"
      ctx.body = "Get Facebook authorization code successfully"

      const config_usertoken = {
        method: 'GET',
        url: `https://graph.facebook.com/v18.0/oauth/access_token?client_id=${client_id}&redirect_uri=${redirect_uri}&client_secret=${client_secret}&code=${result}`,
        headers: {},
        data: {}
      }

      let res_usertoken = await axios(config_usertoken)
      let user_access_token = res_usertoken.data.access_token
      console.log("\u001b[1;32m" + "USER_ACCESS_TOKEN:" + "\u001b[0m", user_access_token);

      let pageID = "akadigital.net"
      console.log("\u001b[1;32m" + "PAGE_ID:" + "\u001b[0m", pageID);

      let config_pagetoken = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://graph.facebook.com/${pageID}?fields=access_token&access_token=${user_access_token}`,
        headers: {},
        data: {}
      };

      let res_pagetoken = await axios(config_pagetoken)
      pageToken = res_pagetoken.data.access_token
      console.log("\u001b[1;32m" + "PAGE_TOKEN:" + "\u001b[0m", pageToken);

      let subscribe_app = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://graph.facebook.com/${pageID}/subscribed_apps?subscribed_fields=leadgen&access_token=${pageToken}`,
        headers: {},
        data: {}
      };

      let res_subscribe_app = await axios(subscribe_app)
      console.log("\u001b[1;32m" + "res_subscribe_app:" + "\u001b[0m", res_subscribe_app);
    }

    return pageToken;
    //https://www.facebook.com/v8.0/dialog/oauth?client_id=843916146887327&redirect_uri=http://localhost:1337/api/facebook/homepage
  },
  async webhook(ctx) {
    ctx.body = "Success"
    console.log(ctx.request.body)
  },
});
