import { Events } from "discord.js";
import CustomClient from "../Client";

export default interface IEvent {
    client: CustomClient;
    name: Events;
    description: string;
    once: boolean;
}