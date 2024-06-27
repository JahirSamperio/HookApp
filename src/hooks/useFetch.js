import react, { useEffect, useState } from 'react'

export const useFetch = (url) => {

  
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null
    })

    useEffect(() => {

        getFetch();
        // setState(getFetch());

        return () => {
        
        }
    }, [url])

    //funcion para que cargue mientras realiza la peticion a la api
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading:true,
            hasError: false,
            error:null
        })
    }

    const getFetch = async() => {
        
        setLoadingState();

        const resp = await fetch(url)


        if (!resp.ok) {
            setState({
                data: null,
                isLoading:false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            })
            return;
        }

    
        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        })
        // return data
    }

    // manejo de cache
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage
    }
}
