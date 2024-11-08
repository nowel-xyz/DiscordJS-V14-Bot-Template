import { AutocompleteInteraction, ChatInputCommandInteraction, PermissionResolvable } from "discord.js";
import CustomClient from "../Client";
import Category from "../enums/Category";

export default interface ICommand {
    client: CustomClient;
    name: string;
    description: string;
    category: Category;
    options: object;
    default_member_permissions: bigint;
    dm_permission: boolean;
    bot_permissions: PermissionResolvable | null;
    cooldown: number;
    dev: boolean;

    Execute(interaction: ChatInputCommandInteraction): any
    AutoComplete(interaction: AutocompleteInteraction): any
}