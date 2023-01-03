//custom stylesheets
import '../../styles/HomeSectionI.css'

//dependencies
//import { FaStar } from 'react-icons/fa'


//components
import ButtonElement from "./elements/ButtonElement"

const HomeSectionI = () => {
    return (
        <div className="container-fluid home-section-I-container p-0 my-5 d-flex align-items-center justify-content-center">
	    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
		  <div class="carousel-indicators">
		    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
		    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
		  </div>
		  <div class="carousel-inner">
			<div class="carousel-item active">
			      <img src="src/assets/bg-comments.png" class="d-block w-100" alt="..." />
			</div>
			<div class="carousel-item">
			      <img src="src/assets/bg-comments.png" class="d-block w-100" alt="..." />
			</div>
			<div class="carousel-item">
			      <img src="src/assets/bg-comments.png" class="d-block w-100" alt="..." />
			</div>
		  </div>
		  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="visually-hidden">Previous</span>
		  </button>
		  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="visually-hidden">Next</span>
		  </button>
	   </div>
        </div>
    )
}

export default HomeSectionI
