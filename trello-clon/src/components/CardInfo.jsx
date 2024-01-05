import '../assets/css/ModalInfo.css'
import PropTypes from 'prop-types';
import { BsX } from "react-icons/bs";

export const CardInfo = ({ isOpen, onCloseCardInfo, listName }) => {

    const closeCardInfo = () => {
        onCloseCardInfo();
    }

    return (
        <section className={
            isOpen ? 'modalVisible infoModalContent' : 'modalNone'
        }>
            <section className="modalInfoContent">
                <section className="infoTitle">
                    <div className="titleInfo">
                        <h4>Card Title</h4>
                        <span id='span'>On: {listName}</span>
                    </div>
                    <div className="closeModal">
                        <button onClick={closeCardInfo}><BsX style={{ fontSize: "29px" }} /></button>
                    </div>
                </section>
                <section className="cardNotes">
                    <div className="tn">
                        <h4>Notes</h4>
                    </div>
                    <div className="cardNotesInfo">
                        <p>Add your notes here...</p>
                    </div>
                </section>
            </section>
        </section>    
    )
}

CardInfo.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCloseCardInfo: PropTypes.func.isRequired,
    listName: PropTypes.string.isRequired   
}
