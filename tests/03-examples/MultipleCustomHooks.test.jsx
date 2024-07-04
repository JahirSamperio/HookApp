import { render,screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"


jest.mock('../../src/hooks/useFetch')

describe('Pruebas en MultipleCustomHooks', () => {
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />)
        screen.debug();

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText('Informacion del pokemon')).toBeTruthy();

    })
    // test('Debe de mostrar un pokemon', () => {
    //     const front_default='1', front_shiny='2', back_default='3', back_shiny='4';
    //     useFetch.mockReturnValue({
    //         data: [{ 
    //             id: 123, 
    //             name: 'Valla'
    //             // sprites: [
    //             //     front_default= 'http://example.com/front.png',
    //             //     front_shiny= 'http://example.com/front_shiny.png',
    //             //     back_default= 'http://example.com/back.png',
    //             //     back_shiny= 'http://example.com/back_shiny.png'
    //             // ]
    //         }],
    //         isLoading: false,
    //         hasError: null
    //     })
    //     render(<MultipleCustomHooks />)
    //     screen.debug();

    // })
    test('Deberia de llamar la funcion de incrementar', () => { 
        
    })

})