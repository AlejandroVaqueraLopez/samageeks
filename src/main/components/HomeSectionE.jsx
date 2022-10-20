//custom stylesheets
import '../../styles/HomeSectionE.css'

//dependencies
import { IoSettingsSharp } from "react-icons/io5";
import { FaLaptop,FaServer } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const HomeSectionE = () => {
    return (
        <div className="container-fluid home-section-d-container p-0 my-5 d-flex align-items-center justify-content-center">
            <div className="container">

                <div className="row ">
                    <div className="col-12">

                        <div className="accordion accordion-flush" id="accordionFlushExample">

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed mx-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <div className="accordion-btn-container d-flex align-items-center">
                                            <IoSettingsSharp style={{ fontSize: "35px", color: "#02303f"}}/>
                                            <span className="px-3 accordion-btn-title">Soporte y Reparación</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body accordion-text text-start px-0">Ofrecemos soporte remoto, presencial y a domicilio, así como asesoría, reparación, mantenimiento e instalación de software especializado.</div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed mx-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <div className="accordion-btn-container d-flex align-items-center">
                                            <FaLaptop style={{ fontSize: "35px", color: "#02303f"}}/>
                                            <span className="px-3 accordion-btn-title">Venta</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body accordion-text text-start px-0">
                                        Equipo reconstruido, actualizado y mejorado. Puedes adquirir equipo con mucho mejor rendimiento a un precio mucho menor que en el mercado y con garantía de Sama Geeks.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed mx-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <div className="accordion-btn-container d-flex align-items-center">
                                                <FaServer style={{ fontSize: "35px", color: "#02303f"}}/>
                                                <span className="px-3 accordion-btn-title">Redes e infraestructura</span>
                                            </div>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body accordion-text text-start px-0">Instalación de redes, sistemas de seguridad, video vigilancia e integraciones inteligentes pre-programables. Cobertura de red, sistemas de audio y video de alta calidad.</div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed mx-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <div className="accordion-btn-container d-flex align-items-center">
                                                <TbWorld style={{ fontSize: "35px", color: "#02303f"}}/>
                                                <span className="px-3 accordion-btn-title">Desarrollo web</span>
                                            </div>
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body accordion-text text-start px-0">Crea un sitio web amigable para informar a tus clientes acerca de los servicios que ofreces y la experiencia que pueden esperar. Automatiza servicios y mantente en contacto con las personas que buscan tu producto o servicio en línea.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeSectionE