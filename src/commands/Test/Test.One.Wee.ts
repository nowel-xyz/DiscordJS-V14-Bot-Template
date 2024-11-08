import { ChatInputCommandInteraction } from "discord.js";
import CustomClient from "../../base/Client";
import SubCommand from "../../base/Client/SubCommand";

export default class TestOwnWee extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "test.one.wee",
        })
    }

    Execute(interaction: ChatInputCommandInteraction): void {
        interaction.reply({ content: `test.one.wee`, ephemeral: true})
    }
}