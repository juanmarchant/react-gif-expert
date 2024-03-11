import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en GifGrid', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'abc2',
                title: 'saitama2',
                url: 'https://localhost/saitama2.jpg'
            },

        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole("img").length).toBe(2);
        // screen.debug();



    })
})