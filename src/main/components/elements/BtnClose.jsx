//css stylesheets
import '../../../styles/BtnClose.css'
//dependencies
import { FaPlus } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const BtnClose = ({ event }) => {
    return (
        <button className="btn-cls" onClick={event}>
            <IconContext.Provider value={{className:"btn-cls-plus"}}>
                <FaPlus />
            </IconContext.Provider>
        </button>
    )
}

export default BtnClose