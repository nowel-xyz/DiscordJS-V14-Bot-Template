import { Events, Guild } from "discord.js";
import Event from "../../base/Client/Event";
import CustomClient from "../../base/Client";

export default class GuildDelete extends Event {
    constructor(client: CustomClient) {
        super(client, {
            name: Events.GuildDelete,
            description: "Guild leave events",
            once: false
        })
    }

     async Execute(guild: Guild) {
       console.log(`Left guild ${guild.name}`)
    }
}