import { ChatInputCommandInteraction } from "discord.js";
import CustomClient from "../../base/Client";
import SubCommand from "../../base/Client/SubCommand";

export default class TestTwo extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "test.two",
        })
    }

    Execute(interaction: ChatInputCommandInteraction): void {
        let amount = interaction.options.getNumber("amount")
        interaction.reply({ content: `Your number is ${amount}`, ephemeral: true})
    }
}