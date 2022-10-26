import { Advisor } from "./advisor";
import { Fighter } from "./fighter";
import { King } from "./king";
import { Squire } from "./squire";

export const characters = [
    new King("Joffrey Baratheon", "Baratheon", 18, 3),
    new Fighter("Jaime Lannister", "Lannister", 40, "sword", 10),
    new Fighter("Daenerys Targaryen", "Targaryen", 24, "dragons", 10),
    new Advisor("Tyrion Lannister", "Targaryen", 43),
    new Squire("Bronn", "Black Waters", 50, 5),
];

(<Advisor>characters[3]).hired(characters[2] as Fighter);
