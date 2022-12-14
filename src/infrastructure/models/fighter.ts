import { Character } from "./character";

export class Fighter extends Character {
    weapon: string;
    skills: number;
    constructor(
        id: number,
        name: string,
        family: string,
        age: number,
        weapon: string,
        skills: number
    ) {
        super(id, name, family, age);
        this.weapon = weapon;
        this.skills = skills;
        this.message = "First I punch and then I ask";
    }
}
