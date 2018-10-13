const EventEmitter = require('events')
const discordentry = require('./discord/discordentry')
let discord = new discordentry.discord();

class SocialFlow extends EventEmitter {}

async function startDiscordService(token) {
    await discord.login(token)
}