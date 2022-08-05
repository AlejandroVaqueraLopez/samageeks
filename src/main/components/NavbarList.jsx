//dependencies
import { NavLink } from 'react-router-dom'
//elements
import BtnClose from './elements/BtnClose'

const NavbarList = ({ event }) => {

    return (
        <div className="navbar-list" id="btnNavbar">

            <div className="row mt-4 px-4 border border-dark">
                <div className="col-12 border border-dark">
                    <BtnClose event={event}/>
                </div>
            </div>

            <div className="p-4 border border-dark">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active upper-link" aria-current="page" to="/">INICIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active upper-link" aria-current="page" to="/servicios">SERVICIOS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active upper-link" to="/nosotros" aria-disabled="true">NOSOTROS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active upper-link" to="/contacto" aria-disabled="true">CONTACTO</NavLink>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default NavbarList