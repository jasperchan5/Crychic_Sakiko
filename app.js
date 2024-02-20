import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv";

import WebSocket from 'ws';

import express from 'express'

const SocketServer = WebSocket.Server

const PORT = 3001
const app = express();
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`))

const wss = new SocketServer({ server })

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution
] });

connectMongo();

dotenv.config();
const token = process.env.HIROI_TOKEN;
const clientID = process.env.HIROI_ID
const guildID = process.env.GUILD_ID;
client.login(token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});