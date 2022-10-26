import { Character } from "./character";
import { Fighter } from "./fighter";
import { King } from "./king";
import { Squire } from "./squire";

export class Advisor extends Character {
    boss: King | Fighter | Squire | null;
    constructor(name: string, family: string, age: number) {
        super(name, family, age);
        this.message = `I don't know why, but I think I'm going to die soon`;
        this.boss = null;
    }
    hired(boss: King | Fighter | Squire | null) {
        this.boss = boss;
    }
}
