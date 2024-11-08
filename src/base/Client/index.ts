import { Client, Collection, GatewayIntentBits, Partials } from "discord.js";
import { connect } from "mongoose"
import IClient from "../interface/IClient";
import IConfig from "../interface/IConfig";
import Handler from "./Handler";
import Command from "./Command";
import SubCommand from "./SubCommand";

export default class CustomeClient extends Client implements IClient {
    public developmentMode: boolean;
    public config: IConfig;
    private handler: Handler
    public commands: Collection<string, Command>;
    public subCommands: Collection<string, SubCommand>;
    public cooldowns: Collection<string, Collection<string, number>>;

    constructor() {
        super({ 
            intents: [
                GatewayIntentBits.Guilds, 
                GatewayIntentBits.MessageContent, 
                GatewayIntentBits.GuildMessages, 
                GatewayIntentBits.Guilds, 
                GatewayIntentBits.GuildMembers,
            ] 
        })
        this.handler = new Handler(this)
        this.commands = new Collection()
        this.subCommands = new Collection()
        this.cooldowns = new Collection()
        this.config = require(`${process.cwd()}/data/config.json`)
        this.developmentMode = (process.argv.slice(2).includes("--development"))
    }
    

    public async Init(): Promise<void> {
        console.log(`Starting the bot in ${this.developmentMode ? "development" : "production"}`)

        try {
            await connect(process.env.MONGOOSE_URL || "")
            console.log(`[MongoDB] - Connected to the database`)
        } catch (error) {
            console.error(`[MongoDB] - Error: ${error}`)   
        }

        try {
            this.login(process.env.DISCORD_TOKEN)    
        } catch (error) {
            console.error(`[DiscordBot] - Error: ${error}`)   
        }

        try {
            this.handler.LoadCommands()
            this.handler.LoadEvents()
        } catch (error) {
            console.error(`[Handler] - Error ${error}`)
        }
    }



    
} 