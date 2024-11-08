import { ChatInputCommandInteraction } from "discord.js";
import CustomClient from "../../base/Client";
import SubCommand from "../../base/Client/SubCommand";

export default class TestTwo extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "test.tes",
        })
    }

    Execute(interaction: ChatInputCommandInteraction): void {
        interaction.reply({ content: `test.tes`, ephemeral: true})
    }
}