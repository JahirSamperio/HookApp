import React, { useState } from 'react'
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
    
    const {counter,reset,increment,decrement} = useCounter(0)

    const [show, setShow] = useState(true)
    
    return (
        <>
            <h1>Counter: <Small value={counter}/> </h1>
            <button onClick={() => increment(1)} className='btn btn-primary'>Agregar</button>
            <button onClick={() => setShow(!show)} className='btn btn-primary'>Show/Hide {JSON.stringify(show)}</button>
        </>

    )
}
