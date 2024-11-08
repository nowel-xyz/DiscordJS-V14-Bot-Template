import { ChatInputCommandInteraction } from "discord.js";
import CustomClient from "../Client";

export default interface ISubCommand {
    client: CustomClient;
    name: string;

    Execute(interaction: ChatInputCommandInteraction): any
}