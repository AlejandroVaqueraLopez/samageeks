//custom stylesheets
import '../../styles/HomeSectionD.css'

//components
import ButtonElement from "./elements/ButtonElement"

const HomeSectionD = () => {
    return (
        <div className="container-fluid home-section-d-container p-0 my-5 d-flex align-items-center justify-content-center">
            <div className="container">

                <div className="row ">
                    <div className="col-12">
                        <span className="services-subtitle d-flex justify-content-start">Servicios</span>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-12">
                        <span className="services-paragraph d-flex justify-content-start">Con experiencia en sistemas de Apple, Microsoft y Linux, Sama Geeks ofrece una amplia gama de servicios.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeSectionD