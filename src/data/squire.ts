import { Character } from "./character";

export class Squire extends Character {
    patheticLevel: number;
    constructor(
        id: number,
        name: string,
        family: string,
        age: number,
        patheticLevel: number
    ) {
        super(id, name, family, age);
        this.patheticLevel = patheticLevel;
        this.message = "I am a loser";
    }
}
