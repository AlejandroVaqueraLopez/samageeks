//custom stylesheets
import '../../styles/HomeSectionI.css'

//dependencies
//import { FaStar } from 'react-icons/fa'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

//components
import ButtonElement from "./elements/ButtonElement"

//autoPlay interval="15000" transitionTime="1000" infiniteLoop
const HomeSectionI = () => {
    return (
        <div className="container-fluid home-section-I-container p-0 my-5 d-flex align-items-center justify-content-center">
            <Carousel className="carousel-container d-flex aling-items-center" showThumbs={false} showArrows={true} showIndicators={false} centerMode centerSlidePercentage={(window.innerWidth < 992) ? 100 : 50} emulateTouch={true} >

                <div className='carousel-item-container'>
                    <div className='carousel-item-content'>
                        <p>
                            Entendemos lo importante que es tu equipo y tu información, sabemos que 
                            la vida no se detiene y que es una herramienta indispensable en tu día a dia.
                        </p>
                        <div className='comment-author-container d-flex justify-content-start align-items-center'>
                            <img className="author-pic" src="src/assets/emoji-1.jpg" alt="" />
                            <div className="ps-2">
                                <h3>Yazmine sanches</h3>
                                <span>a traves de facebook</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-item-container'>
                    <div className='carousel-item-content'>
                        <p>
                            Entendemos lo importante que es tu equipo y tu información, sabemos que 
                            la vida no se detiene y que es una herramienta indispensable en tu día a dia.
                        </p>
                        <div className='comment-author-container d-flex justify-content-start align-items-center'>
                            <img className="author-pic" src="src/assets/emoji-1.jpg" alt="" />
                            <div className="ps-2">
                                <h3>Yazmine sanches</h3>
                                <span>a traves de facebook</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-item-container'>
                    <div className='carousel-item-content'>
                        <p>
                            Somos tus geeks de confianza.
                            Quienes cuidan tu equipo de la manera más segura, honesta y 
                            humana posible, como si de nuestros propios equipos se trataran. 
                            Entendemos lo importante que es tu equipo y tu información, sabemos que 
                            la vida no se detiene y que es una herramienta indispensable en tu día a dia.
                        </p>
                        <div className='comment-author-container d-flex justify-content-start align-items-center'>
                            <img className="author-pic" src="src/assets/emoji-1.jpg" alt="" />
                            <div className="ps-2">
                                <h3>Yazmine sanches</h3>
                                <span>a traves de facebook</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-item-container'>
                    <div className='carousel-item-content'>
                        <p>
                            Somos tus geeks de confianza.
                            Quienes cuidan tu equipo de la manera más segura, honesta y 
                            humana posible, como si de nuestros propios equipos se trataran. 
                            Entendemos lo importante que es tu equipo y tu información, sabemos que 
                            la vida no se detiene y que es una herramienta indispensable en tu día a dia.
                        </p>
                        <div className='comment-author-container d-flex justify-content-start align-items-center'>
                            <img className="author-pic" src="src/assets/emoji-1.jpg" alt="" />
                            <div className="ps-2">
                                <h3>Yazmine sanches</h3>
                                <span>a traves de facebook</span>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default HomeSectionI
