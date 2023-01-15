//custom stylesheets
import '../../styles/HomeSectionA.css'

//components
import HomeSectionAButtons from './HomeSectionAButtons'

const HomeSectionA = () => {
    return (
        <div className="container-fluid home-section-a-container p-0 m-0 d-flex align-items-center">
            <div className="container">
                <div className="row">

                    <div className="col-12 home-section-col d-flex flex-column align-items-center">

                        <div className="title-container d-flex flex-column align-items-center my-3">
                            <span className="title-row">CREA</span>
                            <span className="title-row">MEJORA</span>
                            <span className="title-row">SOLUCIONA</span>
                        </div>

                        <p className="subtitle-container my-3 text-center">
                            Somos Geeks. Tenemos <b className="fw-bold">+8 años de experiencia</b> en 
                            la reparación y mantenimiento de equipos de 
                            cómputo, redes y sistemas de seguridad en la ciudad 
                            de Tijuana, México.
                        </p>

                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <HomeSectionAButtons />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionA