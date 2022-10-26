export interface ICharacter {
    id: number;
    name: string;
    family: string;
    age: number;
    image: string;
    lifeStatus: boolean;
    message: string;
}
export interface IMethodsCharacter {
    death: () => void;
    communicate: () => string;
}
//export abstract class Character implements ICharacter, IMethodsCharacter {
export class Character implements ICharacter, IMethodsCharacter {
    id: number;
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    static series = "Game of Thrones";
    image: string;
    constructor(id: number, name: string, family: string, age: number) {
        this.id = id;
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = "";
        this.image = "";
    }

    communicate() {
        return this.message;
    }

    death() {
        this.lifeStatus = false;
    }
}
