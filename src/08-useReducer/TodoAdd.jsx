import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

    const {descripcion, onInputChange} = useForm({
        descripcion: ''
    });

    
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if( descripcion.length <= 1 ) return;
        
        const todo = {
            id: new Date().getTime(),
            descripcion,
            done: false
        }

        onNewTodo(todo);
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="¿Que hay que hacer?"
                    className="form-control"
                    name='descripcion'
                    value={descripcion}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                    onClick={onFormSubmit}
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
