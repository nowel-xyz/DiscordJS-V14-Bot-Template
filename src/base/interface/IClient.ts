import { Collection } from "discord.js";
import Command from "../Client/Command";
import SubCommand from "../Client/SubCommand";
import IConfig from "./IConfig";

export default interface ICustomClient {
    config: IConfig
    commands: Collection<string, Command>
    subCommands: Collection<string, SubCommand>
    cooldowns: Collection<string, Collection<string, number>>
    developmentMode: Boolean;

    Init(): void;
}