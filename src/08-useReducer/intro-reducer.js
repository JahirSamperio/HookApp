const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}];

const todoReducer = ( state = initialState, action = {}) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }

    return state;

}

let todos = todoReducer(); //Esto es un arreglo 

//Enviar una accion para modificar el arreglo del state
const newTodo = {
    id: 2,
    todo: 'Recolectar la pidera del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    //asi se le dice a la carga que se le manda
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log({state: todos} );