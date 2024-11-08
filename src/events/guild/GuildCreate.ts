import { EmbedBuilder, Events, Guild } from "discord.js";
import Event from "../../base/Client/Event";
import CustomClient from "../../base/Client";


export default class GuildCreate extends Event {
    constructor(client: CustomClient) {
        super(client, {
            name: Events.GuildCreate,
            description: "Guild join events",
            once: false
        })
    }

    async Execute(guild: Guild) {
        const owner = await guild.fetchOwner()
        owner?.send({ embeds: [new EmbedBuilder()
            .setColor("Green")
            .setDescription(`Hey! Thanks for inviting me to your server!`)
        ]}).catch();

    }
}