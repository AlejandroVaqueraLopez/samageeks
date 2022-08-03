//dependencies
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container ">

            <nav className="navbar navbar-light border border-dark ">
                <div className="container-fluid d-flex justify-content-start">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand ms-3" to="/">
                        <img src="./src/assets/home-logo.png" alt="no logo" />
                    </NavLink>
                </div>
            </nav>


            <div className="collapse" id="navbarToggleExternalContent">
                <div className="p-4 border border-dark">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">INICIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/servicios">SERVICIOS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/nosotros" aria-disabled="true">NOSOTROS</NavLink>
                            </li>
                        </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar