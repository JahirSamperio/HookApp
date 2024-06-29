import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks';


const heaveStuff = ( iterationNumber = 100 ) => {
    for(let i = 0; i<iterationNumber; i++){
        console.log('Ahi vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
    
    const {counter,reset,increment,decrement} = useCounter(40)
    
    const [show, setShow] = useState(true)
    
    const memorizedValue = useMemo(() => heaveStuff(counter), [counter])
    
    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>

            <h4>{memorizedValue}</h4>



            <button onClick={() => increment(1)} className='btn btn-primary'>Agregar</button>
            <button onClick={() => setShow(!show)} className='btn btn-outline-primary'>Show/Hide {JSON.stringify(show)}</button>
        </>

    )
}
