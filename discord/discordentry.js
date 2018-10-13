module.exports = class Discord {
    constructor(token) {
        this.token = token;
        this.discord = require('discord.js');
        this.client = this.discord.client();
    }


}