import { render, screen } from "@testing-library/react"
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo')

describe('Pruebas en el TodoApp', () => {

    useTodo.mockReturnValue({
        todos: [
            {id: 1, descripcion: 'Todo #1', done: false},
            {id: 2, descripcion: 'Todo #2', done: true},
        ], 
        todosCount: jest.fn(), 
        pendingTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn() 
    })

    test('debe de mostrar el componente correctamente', () => {
        render( <TodoApp /> );
        screen.debug();
        expect( screen.getByText('Todo #1')).toBeTruthy();
        expect( screen.getByText('Todo #2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();
    })
})