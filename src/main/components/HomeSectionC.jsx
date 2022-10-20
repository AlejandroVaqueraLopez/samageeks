//custom stylesheets
import '../../styles/HomeSectionC.css'

//components
import ButtonElement from "./elements/ButtonElement"

const HomeSectionC = () => {
    return (
        <div className="container-fluid home-section-c-container p-0 my-5 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">

                    <div className="col-12">

                        <div className="row px-4">
                            <div className="col-12 col-lg-6">
                                <div className="title-container d-flex flex-column align-items-start my-3">
                                    <span className="title-second">SOMOS</span>
                                    <span className="title-second">SAMA GEEKS</span>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                                <p className="subtitle-container my-3 text-start">
                                    Nos especializamos en el cuidado, soporte y reparación de equipos de computo, 
                                    redes y sistemas informáticos, así como en el diseño, desarrollo y hosting de sitios web.
                                </p>
                                <div className="row d-flex justify-content-center p-0">
                                    <div className="col-12 d-flex justify-content-start m-0 p-0">
                                        <ButtonElement text="Conoce al equipo" bg="#07BFE9" className="mx-0 px-0"/>
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