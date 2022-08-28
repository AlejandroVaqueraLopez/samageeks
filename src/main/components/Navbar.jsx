//components
import NavbarList from './NavbarList'
//dependencies
import { NavLink } from 'react-router-dom'
//hooks
import { useState } from 'react'
//css stylesheets
import '../../styles/NavbarList.css'

const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState(false)

    const navbarClick = () => {
        setNavbarToggle(!navbarToggle)
    }

    return (
        <div className="container navbar-container m-0 p-0">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar container navbar-light mx-0 px-0">
                        <div className="d-flex justify-content-start mx-0 px-0">
                            <button className="navbar-toggler" onClick={ navbarClick } type="button">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <NavLink className="navbar-brand ms-3" to="/">
                                <img src="./src/assets/home-logo.png" alt="no logo" />
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>

            {
                navbarToggle 
                ? (
                    <NavbarList event={ navbarClick } />
                ):(
                    null
                )
            }

        </div>
    )
}

export default Navbar