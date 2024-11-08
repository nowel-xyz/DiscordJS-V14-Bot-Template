import { Collection, Events, REST, Routes } from "discord.js";
import Event from "../base/Client/Event";
import CustomClient from "../base/Client";
import Command from "../base/Client/Command";

export default class Ready extends Event {
    constructor(client: CustomClient) {
        super(client, {
            name: Events.ClientReady,
            description: "Ready Event",
            once: true
        })
    }
    async Execute() {
        console.log(`${this.client.user?.tag} is now ready!`)

        const rest = new REST().setToken(process.env.DISCORD_TOKEN || "")
        if (!this.client.developmentMode) {
            const globalCommands: any = await rest.put(Routes.applicationCommands(this.client.user?.id || this.client.config.clientId), {
                body: this.GetJson(this.client.commands.filter(command => !command.dev))
            })
            console.log(`Successfuly set ${globalCommands.length} global application (/) commands`)
        }


        const devCommands: any = await rest.put(Routes.applicationGuildCommands(this.client.user?.id || this.client.config.clientId, this.client.config.devGuildId), {
            body: this.GetJson(this.client.commands.filter(command => command.dev))
        })
        console.log(`Successfuly set ${devCommands.length} dev application (/) commands`)

        

    }


    private GetJson(commands: Collection<string, Command>): object[] {
        const data: object[] = []

        commands.forEach(command => {
            data.push({
                name: command.name,
                description: command.description,
                options: command.options,
                default_member_permissions: command.default_member_permissions.toString(),
                dm_permission: command.dm_permission,
            })
        })

        return data;
    }
}