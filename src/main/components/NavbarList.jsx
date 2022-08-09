//dependencies
import { NavLink } from 'react-router-dom'
//elements
import BtnClose from './elements/BtnClose'

const NavbarList = ({ event }) => {

    return (
        <div className="navbar-list" id="btnNavbar">

            <div className="btn-cls-container row my-3 ps-3 ps-sm-5">
                <div className="col-12">
                    <BtnClose event={event}/>
                </div>
            </div>

            <div className="row p-0 m-0 d-flex justify-content-center align-items-center navbar-list-container">
                <div className="col-12">
                    <ul className="navbar-nav m-0 p-0">
                        <li className="nav-item" onClick={event}>
                            <NavLink className="nav-link active upper-link" aria-current="page" to="/">INICIO</NavLink>
                        </li>
                        <li className="nav-item" onClick={event}>
                            <NavLink className="nav-link active upper-link" aria-current="page" to="/servicios">SERVICIOS</NavLink>
                        </li>
                        <li className="nav-item" onClick={event}>
                            <NavLink className="nav-link active upper-link" to="/nosotros" aria-disabled="true">NOSOTROS</NavLink>
                        </li>
                        <li className="nav-item" onClick={event}>
                            <NavLink className="nav-link active upper-link" to="/contacto" aria-disabled="true">CONTACTO</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default NavbarList