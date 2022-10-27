//custom stylesheets
import '../../styles/HomeSectionG.css'

//dependencies
import { FaArrowRight } from 'react-icons/fa'

//components
import ButtonElement from "./elements/ButtonElement"

const HomeSectionG = () => {
    return (
        <div className="container-fluid home-section-g-container p-0 my-5 d-flex align-items-center justify-content-center">
            <div className="container">

                <div className="row d-flex">
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div className="invoice-container">
                            <span className="invoice-text">Cotiza un proyecto o reparación.</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <ButtonElement text="Llamar" bg="#07bfe9" icon="call" color="#fff"/>
                        <a className="invoice-link mx-3" href="/servicios">
                            <span>Todos nuestros servicios <FaArrowRight /></span>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomeSectionG