import { useEffect } from "react";
import { useCounter,useFetch } from "../hooks";
import { LoadingMessage, PokemonCard } from "../03-examples";



export const Layout = () => {

    const {counter, decrement, increment, reset} = useCounter(1);

    const {data, isLoading, hasError, errorMessage} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    return (
        <>
            <h1>Informacion del pokemon</h1>
            <hr/>

            {isLoading ? 
                <LoadingMessage/> : 
                <PokemonCard 
                    id={data.id} 
                    name={data.name} 
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}

                />}
            {/* se espera que cargue la api */}

            {/* {data && <pre>{data?.name}</pre>}   */}
            {/* //si hay data, se carga el <pre> y el nombre */}

            <button className="btn btn-primary mt-2" onClick={() => counter > 1 ? decrement(1) : null}>Anterior</button>
            <button className="btn btn-primary mt-2" onClick={() => increment(1)}>Siguiente</button>

        </>


    )
}
