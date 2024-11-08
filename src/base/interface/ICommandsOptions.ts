import { PermissionResolvable } from "discord.js";
import Category from "../enums/Category";

export default interface ICommandOptions {
    name: string;
    description: string;
    category: Category;
    options: object;
    default_member_permissions: bigint;
    dm_permission: boolean;
    bot_permissions: PermissionResolvable | null
    cooldown: number;
    dev: boolean;

}