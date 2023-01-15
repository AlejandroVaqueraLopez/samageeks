//components
import ButtonElement from './elements/ButtonElement'
//stylesheet 
import "../../styles/HomeSectionAButtons.css"

const HomeSectionAButtons = () => {
    return (
        <div className="home-buttons-section home-sectionA-buttons d-flex justify-content-around flex-wrap my-2 p-0">
            <ButtonElement text="Llamar" bg="#07bfe9" icon="call" color="#fff"/>
            <ButtonElement text="¿Como llegar?" bg="#02303f" icon="location" color="#fff"/>
            <ButtonElement text="Soporte" bg="#8a8787" icon="support" color="#fff"/>
            <ButtonElement text="Mi factura" bg="#d5b420" icon="invoice" color="#fff"/>
        </div>
    )
}

export default HomeSectionAButtons