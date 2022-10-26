import { characters } from "../../../data/characters";
import { King } from "../../../data/king";

export function CardItem() {
    return (
        <>
            {characters.map((item) => (
                <li className="character col">
                    <div className="card character__card">
                        <img
                            src={"img/" + item.image}
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
                                    <li>
                                        Rule years:{" "}
                                        {(item as King).kingdomYears !==
                                            undefined}
                                    </li>
                                    <li>Weapon: XXX</li>
                                    <li>Skills: X</li>
                                    <li>Pathetic level: X</li>
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
