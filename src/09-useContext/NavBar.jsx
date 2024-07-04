import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='login'>Login</Link> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>useContext</Link>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink 
                                className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }
                                to='/'>
                                Home
                            </NavLink>
                            
                            <NavLink 
                                className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }
                                to='/about'>
                                About
                            </NavLink>

                            <NavLink 
                                className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}` }
                                to='/login'>
                                Login
                            </NavLink>

                            {/* //el isActive es un evento que viene a la hora de dar click en el boton
                            //Se desestructura y si es true, hace la condicion ternaria
                            //El active es la clase que permite que resalte el boton en  la pagina en la que estamos */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
