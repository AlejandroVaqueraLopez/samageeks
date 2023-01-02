//custom stylesheets
import '../../styles/HomeSectionH.css'

//dependencies
import { FaStar } from 'react-icons/fa'


//components
import ButtonElement from "./elements/ButtonElement"
import ParallaxElement from "./ParallaxElement"
import ParallaxBlock from "./ParallaxBlock"

const HomeSectionH = () => {
    return (
        <div className="position-relative container-fluid home-section-h-container p-0 my-5 d-flex align-items-center justify-content-center">

            <div className="bg-container position-absolute">
                <ParallaxElement bg="src/assets/bg-sama-relleno-resized.png" height="100vh"/>
            </div>

            <div className="container home-section-h border border-dark position-absolute">

                <div className="row d-flex border border-dark">

                    <div className="col-12 col-lg-9 d-flex justify-content-center align-items-center">
                        <div className="helped-container border border-dark">
                            <p className="helped-text text-start">
                                Hemos ayudado a cientos de <span className="helped-person">Profesionistas</span> tijuanenses con sus problemas informáticos.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 align-items-center">
                        <div className="row">

                            <div className="col-12 col-lg-6 d-flex align-items-center">
                                <img className="google-icon" src="./src/assets/google-icon.png" alt="google icon" />
                                <div className="rating-container d-flex align-items-center ms-2">
                                    <span className="google-rating-number fs-5 fw-bold ms-2">4.6</span>
                                    <FaStar style={{ color: "#ffac33", fontSize: "20px" }} className="ms-2"/>
                                    <span className="google-rating-total fs-5 ms-2">de 94 reviews</span>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 d-flex align-items-center">
                                <img className="facebook-icon" src="./src/assets/facebook-icon.png" alt="facebook icon" />
                                <div className="rating-container d-flex ms-2 align-items-center">
                                    <span className="facebook-rating-number fs-5 fw-bold ms-2">4.6</span>
                                    <FaStar style={{ color: "#ffac33", fontSize: "20px" }} className="ms-2"/>
                                    <span className="facebook-rating-total fs-5 ms-2">de 94 reviews</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeSectionH
