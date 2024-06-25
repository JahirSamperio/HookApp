import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Message Mounted');
        return () => {
            console.log('Message unmounted');
        }
    }, [])

  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
)
}
