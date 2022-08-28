//css stylesheets
import '../../../styles/BtnHomeA.css'
//dependencies
import { FaPhoneAlt, FaLocationArrow, FaLaptopMedical, FaPaperclip } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ButtonElement = ({event = null, text, bg, icon}) => {
    return (
        <button className="btn-homeA mx-3 my-1" style={{backgroundColor: `${bg}`}} onClick={event}>
            <IconContext.Provider value={{className:"btn-homeA-icon"}}>
                {
                    icon === "call" 
                        ? (<FaPhoneAlt />) 
                        : icon === "location" 
                            ? (<FaLocationArrow/>) 
                            : icon === "support" 
                                ? (<FaLaptopMedical />) 
                                : icon === "invoice" 
                                    ? (<FaPaperclip/>) 
                                    : "" 
                }
                <span className="ms-2">{ text }</span>
            </IconContext.Provider>
        </button>
    )
}

export default ButtonElement