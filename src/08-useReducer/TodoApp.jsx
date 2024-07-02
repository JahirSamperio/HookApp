import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from '../hooks'

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo();

    return (
        <>
            <h1>Todo App: {todosCount(todos)}, <small>pendientes: {todos.filter(todo => !todo.done).length} {pendingTodosCount}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    {/* TodoAdd.jsx onNewTodo( todo )*/}
                    {/* { id: newDate()..., description: 'CAJA DE TEXTO', done:  false} */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                    {/*Fin TodoAdd.jsx */}
                </div>
            </div>

        </>
    )
}
