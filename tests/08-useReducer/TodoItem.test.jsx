import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el TodoItem', () => {

    const todo = {
        id: 1,
        descripcion: 'Piedra del alma',
        done: false
    }

    //Se declaran fnunciones ficticias para parametros
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    test('debe de mostrar el Todo Pendiente de completar', () => {
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    });
    test('debe de mostrar el Todo completado', () => {

        todo.done = true;

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')

    });
    test('span debe de llamar el ToggleTodo cuando se hace click', () => { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        fireEvent.click(screen.getByText(todo.descripcion))

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    })
    test('span debe de llamar el deleteTodo cuando se hace click', () => { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        fireEvent.click(screen.getByRole('button'))

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    })
})