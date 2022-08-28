//custom stylesheets
import '../../styles/HomeSectionC.css'

//components
import ButtonElement from "./elements/ButtonElement"

const HomeSectionC = () => {
    return (
        <div className="container-fluid home-section-c-container p-0 my-5 d-flex justify-content-center">
            <div className="container">
                <div className="row">

                    <div className="col-12">

                        <div className="row">
                            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                                <div className="title-container d-flex flex-column align-items-center my-3">
                                    <span className="title-row">SOMOS</span>
                                    <span className="title-row">SAMA</span>
                                    <span className="title-row">GEEKS</span>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                                <p className="subtitle-container my-3 text-center">
                                    Nos especializamos en el cuidado, soporte y reparación de equipos de computo, 
                                    redes y sistemas informáticos, así como en el diseño, desarrollo y hosting de sitios web.
                                </p>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-9">
                                        <ButtonElement text="Conoce al equipo" bg="#07BFE9"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionC