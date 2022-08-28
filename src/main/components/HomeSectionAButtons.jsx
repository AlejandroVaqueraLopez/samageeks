//components
import ButtonElement from './elements/ButtonElement'
//stylesheet 
import "../../styles/HomeSectionAButtons.css"

const HomeSectionAButtons = () => {
    return (
        <div className="home-buttons-section home-sectionA-buttons border border-dark d-flex justify-content-around flex-wrap my-2 p-0">
            <ButtonElement text="Llamar" bg="#07bfe9" icon="call"/>
            <ButtonElement text="¿Como llegar?" bg="#02303f" icon="location"/>
            <ButtonElement text="Soporte" bg="#8a8787" icon="support"/>
            <ButtonElement text="Mi factura" bg="#d5b420" icon="invoice"/>
        </div>
    )
}

export default HomeSectionAButtons