import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'IlyCaro',
        email: 'jahir@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('cambio el correo');
    }, [formState.email]);


  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>
        <input type="text" 
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
        />

        <input type="email" 
                className='form-control mt-2'
                placeholder='jahirsampe@gmail.com'
                name='email'
                value={email}
                onChange={onInputChange}
        />
        {
            (username === 'IlyCaro2') && <Message />
        }
    </>
  )
}
