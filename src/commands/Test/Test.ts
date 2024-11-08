import { ApplicationCommandOptionType, PermissionsBitField } from "discord.js";
import Command from "../../base/Client/Command";
import CustomClient from "../../base/Client";
import Category from "../../base/enums/Category";

export default class Test extends Command {
    constructor(client: CustomClient) {
        super(client, {
            name: "test",
            description: "Test command",
            category: Category.Utilities,
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permission: false,
            cooldown: 3,
            options: [
                {
                    name: "one",
                    description: "this is one",
                    type: ApplicationCommandOptionType.SubcommandGroup,
                    options: [
                        {
                            name: "wee",
                            description: "this is one wewe",
                            type: ApplicationCommandOptionType.Subcommand
                        },
                    ]
                },
                {
                    name: "two",
                    description: "this is two",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "amount",
                            description: "set a amount to return",
                            type: ApplicationCommandOptionType.Number,
                            required: true
                        }
                    ]
                },
                {
                    name: "tes",
                    description: "this is one",
                    type: ApplicationCommandOptionType.Subcommand
                },
            ],
            dev: true,
            bot_permissions: null
        })
    }
}