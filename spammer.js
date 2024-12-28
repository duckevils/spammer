'use strict';
// mfasiz halini saticam glb almak ıstıyorsaniz @duck.js
const Discord = require("discord.js");
const fetch = require("node-fetch");
const fs = require("fs");

class duckevils {
    constructor() {
        this.crayURL;
        this.client = new Discord.Client({ intents: 3276799 });
        this._map = new Map();
        this.queue = new Map();
        this.updownheree = {
            crayArray: [],
            mmpsh(...crayArray) {
                this.crayArray.push(...crayArray);
            },
            mfx(index) {
                return this.crayArray[index];
            },
            mxdt(nmb, letAry) {
                if (!nmb || !letAry) throw new Error("Please provide a valid number and array");
                return delete letAry[nmb];
            }
        };
    }

    uwCray(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async basla() {
        this.client.on('ready', () => {
            console.log(`Spammer Started With: ${this.client.user.tag}`);
            const guildId = "1253313620708950016"; // sunucuuuuıııııd
            const vanities = fs.readFileSync("vanities.txt", "utf8").split("\n").filter(Boolean);
            const tokens = fs.readFileSync("tokens.txt", "utf8").split("\n").filter(Boolean);
            console.log(`Loaded ${vanities.length} vanity URLs from vanities.txt`);
            console.log(`Loaded ${tokens.length} tokens from tokens.txt`);
            console.log(`duckevils wishes you a good flight!`);
            this.crayURL = setInterval(async () => {
                for (const vanity of vanities) {
                    await this.guncelle(vanity, guildId, tokens);
                }
            }, 2); // bura hiz 1 de cok hizli oluyo bılemıyorum  30dan assa ınmeyın
        });

        this.client.login("MTI0MzIwMTM0NjE5NTI5NjI2Nw.GZBvoC.ddqwKWEIqwe"); // bot token gırcen buraya
    }

    get(id) {
        let inn = this._map.get(id);
        if (!inn) {
            inn = new ObjectsQuery(this.client, id);
            this._map.set(id, inn);
        }
        return inn;
    }

    dur() {
        clearInterval(this.crayURL);
        this.updownheree.crayArray = [];
    }

    async guncelle(url, guildId, tokens) {
        try {
            const randomIndex = Math.floor(Math.random() * tokens.length);
            const authorizationToken = tokens[randomIndex];

            const response = await fetch(`https://discord.com/api/v7/guilds/${guildId}/vanity-url`, {
                method: "PATCH",
                headers: {
                    "Authorization": authorizationToken.trim(),
                    "Content-Type": "application/json"
                },
                "referrerPolicy": "no-referrer-when-downgrade",
                body: JSON.stringify({
                    code: url
                })
            });

            const responseCode = response.status;
            console.log(responseCode, url);

         
        } catch (error) {
            console.error("Error:", error);
        }
    }
}
const duk = new duckevils();
duk.basla();
module.exports = duckevils;
