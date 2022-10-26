import { characters } from "../../../data/characters";
import { CardItem } from "../card.item/card.item";

export function AllCards() {
    return (
        <>
            {characters.map((item) => (
                <div key={item.id} className="app container">
                    <ul
                        key={item.id}
                        className="characters-list row list-unstyled"
                    >
                        <CardItem></CardItem>
                    </ul>
                    <slot></slot>
                    <div className="comunications">
                        <p className="comunications__text display-1">
                            {" "}
                            {item.message}
                        </p>
                        <img
                            className="comunications__picture"
                            src="img/no-one.jpg"
                            alt="Name and family of speaker"
                        />
                    </div>
                </div>
            ))}
        </>
    );
}
