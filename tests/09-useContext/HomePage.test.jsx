import { render, screen } from "@testing-library/react"
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en el componente HomePage', () => { 
    const hola = 'Caro';

    test('debe de mostrar el componente sin el usaurio', () => { 
        render( 
            <UserContext.Provider value={{hola: 'null'}}>
                <HomePage /> 
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe('null');

        screen.debug();    
    })
    test('debe de mostrar el componente con el usaurio', () => { 
        render( 
            <UserContext.Provider value={{hola}}>
                <HomePage /> 
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe(hola);

        screen.debug();    
    })
})