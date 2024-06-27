import { useFetch } from "../hooks/useFetch"



export const MultipleCustomHooks = () => {
    
    const {data, isLoading, hasError, errorMessage} = useFetch('https://pokeapi.co/api/v2/pokemon/2');
    
    return (
        <>
            <h1>Informacion del pokemon</h1>
            <hr/>

            {isLoading && <p>Loading...</p>}
            {/* se espera que cargue la api */}

            {data && <pre>{data?.name}</pre>}  
        </> //si hay data, se carga el <pre> y el nombre
    )
}
