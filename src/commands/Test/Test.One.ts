import { ChatInputCommandInteraction } from "discord.js";
import CustomClient from "../../base/Client";
import SubCommand from "../../base/Client/SubCommand";

export default class TestOne extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "test.one",
            
        })
    }

    Execute(interaction: ChatInputCommandInteraction): void {
        console.log("asds")
        interaction.reply({ content: `test.one`, ephemeral: true})
    }
}