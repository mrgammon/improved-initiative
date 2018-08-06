import { StatBlock } from "./StatBlock";
import { probablyUniqueString } from "./Toolbox";

export function InitializeCharacter(statBlock: StatBlock): PersistentCharacter {
    return {
        CurrentHP: statBlock.HP.Value,
        StatBlock: statBlock,
        Notes: ""
    };
}

export const DefaultPersistentCharacter = () => InitializeCharacter(StatBlock.Default());

export interface PersistentCharacter {
    CurrentHP: number;
    StatBlock: StatBlock;
    Notes: string;
}