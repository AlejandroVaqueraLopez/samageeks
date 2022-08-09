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
        <div className="container border border-dark m-0 p-0">

            <nav className="navbar navbar-light border border-dark ">
                <div className="container-fluid d-flex justify-content-start">
                    <button className="navbar-toggler" onClick={ navbarClick } type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand ms-3" to="/">
                        <img src="./src/assets/home-logo.png" alt="no logo" />
                    </NavLink>
                </div>
            </nav>

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