import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        descripcion: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        descripcion: 'Recolectar la piedra del poder',
        done: false
    },
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) =>{
        event.preventDefault();
        
        console.log({todo});
    }

    return (
        <>
            <h1>Todo App: 10, <small>pendientes: 2</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
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
