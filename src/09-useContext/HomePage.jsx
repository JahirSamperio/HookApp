import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
    const {hola} = useContext(UserContext);

    return (
        <>
            <h1>Home Page {hola}</h1>
            <hr/>
            <pre aria-label="pre">
                {hola}
            </pre>
        </>
    )
}
