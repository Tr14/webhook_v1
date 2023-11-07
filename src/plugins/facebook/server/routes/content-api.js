"use strict";

const config = require("@strapi/strapi/lib/core/registries/config");

module.exports = {
    type: 'content-api',
    routes: [
        {
            method: "GET",
            path: "/homepage",
            handler: "Facebook.homepage",
            config: {
                policies: []
            }
        },
        {
            method: "POST",
            path: "/webhook",
            handler: "Facebook.webhook",
            config: {
                policies: []
            }
        },
    ]
}
