import { CardItem } from "../card.item/card.item";

export function AllCards() {
    return (
        <>
            <div className="app container">
                <ul className="characters-list row list-unstyled"></ul>
                <CardItem></CardItem>
            </div>
            <slot></slot>
            <div className="comunications">
                <p className="comunications__text display-1">A phrase</p>
                <img
                    className="comunications__picture"
                    src="img/no-one.jpg"
                    alt="Name and family of speaker"
                />
            </div>
        </>
    );
}
