import { Advisor } from "./advisor";
import { Fighter } from "./fighter";
import { King } from "./king";
import { Squire } from "./squire";

export const characters = [
    new King(1, "Joffrey", "Baratheon", 18, 3),
    new Fighter(2, "Jaime", "Lannister", 40, "sword", 10),
    new Fighter(3, "Daenerys", "Targaryen", 24, "dragons", 10),
    new Advisor(4, "Tyrion", "Targaryen", 43),
    new Squire(5, "Bronn", "Black Waters", 50, 5),
];

//(<Advisor>characters[3]).hired(characters[2] as Fighter);
