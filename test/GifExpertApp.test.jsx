import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {

    const inputValue = 'Saitama'
    test('La simulacion debe de tener 3 heading ingresados ', () => {

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: inputValue+'2' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        // screen.debug();
        expect(screen.getAllByRole('heading',{level:3}).length).toBe(3);

    })

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<GifExpertApp />);

        expect(container).toMatchSnapshot();
    })
})