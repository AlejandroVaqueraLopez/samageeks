//custom stylesheets 
import '../../styles/HomeSectionB.css'
//components
import ParallaxBlock from "./ParallaxBlock"

const HomeSectionB = () => {
    return (
        <div className="container-fluid home-section-b-container p-0 m-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ParallaxBlock bg="src/assets/bg-home-b.jpg" height="400px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionB
