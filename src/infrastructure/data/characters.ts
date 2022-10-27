import { Advisor } from "../models/advisor";
import { Fighter } from "../models/fighter";
import { King } from "../models/king";
import { Squire } from "../models/squire";

export const characters = [
    new King(1, "Joffrey", "Baratheon", 18, 3),
    new Fighter(2, "Jaime", "Lannister", 40, "sword", 10),
    new Fighter(3, "Daenerys", "Targaryen", 24, "dragons", 10),
    new Advisor(4, "Tyrion", "Targaryen", 43),
    new Squire(5, "Bronn", "Black Waters", 50, 5),
];

//(<Advisor>characters[3]).hired(characters[2] as Fighter);
// import { Fighter } from "./fighter";

// describe("Given the class character", () => {
//     describe("When we instantiate a class", () => {
//         const mockChar = new Fighter(6, "Jon", "Snow", 25, "sword", 10);
//         test("Then an object should be created with the instance propeties:", () => {
//            Se instancian en un objeto de testing. Creamos un mock,
//              que no existe en la realidad y solo vale para el test.
//         });
//     });
// });
