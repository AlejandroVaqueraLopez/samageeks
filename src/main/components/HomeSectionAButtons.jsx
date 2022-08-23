//components
import BtnHomeA from './elements/BtnHomeA'
//stylesheet 
import "../../styles/HomeSectionAButtons.css"

const HomeSectionAButtons = () => {
    return (
        <div className="home-buttons-section home-sectionA-buttons border border-dark d-flex justify-content-around flex-wrap m-0 p-0">
            <BtnHomeA text="Llamar" bg="#07bfe9" icon="call"/>
            <BtnHomeA text="¿Como llegar?" bg="#02303f" icon="location"/>
            <BtnHomeA text="Soporte" bg="#8a8787" icon="support"/>
            <BtnHomeA text="Mi factura" bg="#d5b420" icon="invoice"/>
        </div>
    )
}

export default HomeSectionAButtons