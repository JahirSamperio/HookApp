import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en el todoReducer', () => { 
    
    const initialState = [{
        id: 1,
        descripcion: 'Demo todo',
        done: false
    }]

    test('debe regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {})

        expect(newState).toBe(initialState);
    })
    test('debe de agergar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                descripcion: 'Nuevo',
                done: false
            }
        }
        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
    })
    test('Debe de eliminar un TODO', () => {
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(0)
        expect(newState).toEqual([]);
    });
    test('debe de realizar el toggle del todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action)

        expect(newState.length).toBe(1)
        expect(newState).toStrictEqual([{
            id: 1,
            descripcion: 'Demo todo',
            done: true
        }]);
    })
})