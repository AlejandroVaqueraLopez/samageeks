//css stylesheets
import '../../../styles/BtnCall.css'
//dependencies
import { FaPhoneAlt} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const BtnCall = ({event = null }) => {
    return (
        <button className="btn-call" onClick={event}>
            <IconContext.Provider value={{className:"btn-call-icon"}}>
                <FaPhoneAlt/>
            </IconContext.Provider>
        </button>
    )
}

export default BtnCall