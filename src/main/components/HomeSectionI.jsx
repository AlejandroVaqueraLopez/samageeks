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
            <Carousel className="carousel-container" showThumbs={false} showArrows={true} centerMode centerSlidePercentage="60" emulateTouch={true} >
                <div>
                    <img src="src/assets/bg-comments.png" />
                    <p className="legend"></p>
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
                        <div className='comment-author-container'>
                            <img className="author-pic" src="src/assets/emoji-1.jpg" alt="" />
                            <div>
                                <h3>Yazmine sanches</h3>
                                <span>a traves de facebook</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="src/assets/bg-comments.png" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="src/assets/bg-comments.png" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="src/assets/bg-comments.png" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="src/assets/bg-comments.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="src/assets/bg-comments.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default HomeSectionI
