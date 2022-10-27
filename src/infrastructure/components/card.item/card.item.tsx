import { characters } from "../../data/characters";
import { Fighter } from "../../models/fighter";
import { King } from "../../models/king";
import { Squire } from "../../models/squire";

export function CardItem() {
    // El map no iria aca sino en  all cards y se le pasa el item por props
    return (
        <>
            {characters.map((item) => (
                <li key={item.id} className="character col">
                    <div className="card character__card">
                        <img
                            src={
                                "./assets/img/" +
                                item.name.toLowerCase() +
                                ".jpg"
                            }
                            alt={`${item.name} ${item.family}`}
                            className="character__picture card-img-top"
                        />
                        <div className="card-body">
                            <h2 className="character__name card-title h4">
                                {`${item.name} ${item.family}`}
                            </h2>
                            <div className="character__info">
                                <ul className="list-unstyled">
                                    <li className="list-age">
                                        Age: {item.age} years
                                    </li>
                                    <li>
                                        State:
                                        <i className="fas fa-thumbs-down"></i>
                                        <i className="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="character__overlay">
                                <ul className="list-unstyled">
                                    {/* lo  suyo sería que el condicional agarre todo el li y que si no tiene el 
                                    personaje esa característica, no aparezca.*/}
                                    <li>
                                        {" "}
                                        {(item as King).kingdomYears ===
                                        undefined
                                            ? ""
                                            : (item as King).kingdomYears}
                                    </li>
                                    <li>
                                        Weapon:{" "}
                                        {(item as Fighter).weapon === undefined
                                            ? ""
                                            : (item as Fighter).weapon}
                                    </li>
                                    <li>
                                        Skills:{" "}
                                        {(item as Fighter).skills === undefined
                                            ? ""
                                            : (item as Fighter).skills}
                                    </li>
                                    <li>
                                        Pathetic level:{" "}
                                        {(item as Squire).patheticLevel ===
                                        undefined
                                            ? ""
                                            : (item as Squire).patheticLevel}
                                    </li>
                                    <li>Advising: X</li>
                                    <li>Squiring: X</li>
                                </ul>
                                <div className="character__actions">
                                    <button className="character__action btn">
                                        speaks
                                    </button>
                                    <button className="character__action btn">
                                        dies
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i className="emoji"></i>
                    </div>
                </li>
            ))}
        </>
    );
}
