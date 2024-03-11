import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem"


describe('Haciendo Pruebas en GifGridItem', () => {

    const title = 'One Punch'
    const url = 'https://onepunch.com/onepunch.png'

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la img con el url y alt indicado', () => {
        render(<GifGridItem title={title} url={url} />);
        // screen.debug();
        
        // expect(screen.getByRole('img').src ).toBe(url)
        const {src, alt}=screen.getByRole('img');
        
        expect(src ).toBe(url)
        expect(alt ).toBe(title)
        

    });

    test('debe de mostrar el titulo en el componente', () => { 

        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy

     })

})