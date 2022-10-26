import { render, screen } from "@testing-library/react";
import { CardItem } from "./card.item";

describe("Given CardItem component", () => {
    describe("When we render the component", () => {
        test('Then it should display "Joffrey Baratheon"', () => {
            render(<CardItem />);
            const element = screen.getByText(/Joffrey Baratheon/i);
            expect(element).toBeInTheDocument();
        });
        test("Then it should show a picture", () => {
            render(<CardItem />);
            const element = screen.getByAltText(/Daenerys Targaryen/i);
            expect(element).toBeInTheDocument();
        });
    });
});
