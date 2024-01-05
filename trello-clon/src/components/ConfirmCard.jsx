import { ConfirmModals } from "./ConfirmModals";
import { useContext } from "react";
import { TrelloContext } from "../context/TrelloContext";
import PropTypes from 'prop-types';
import '../assets/css/ConfirmCard.css';

export const ConfirmCard = ({ modalUsed, listId, cardIndex, onCloseModal }) => {

    const { onDeleteCard } = useContext(TrelloContext);

    const deleteCard = () => {
        onDeleteCard(listId, cardIndex);
    }

    const closeModal = () => {
        onCloseModal();
    }

    return (
        <section className={modalUsed ? 'modalVisible' : 'modalNone'}>
            <ConfirmModals>
                <article className="buttons">
                    <button onClick={deleteCard} id="buttonModal">Yes</button>
                    <button onClick={closeModal} id="buttonModal">Cancel</button>
                </article>
            </ConfirmModals>
        </section>
    )
}

ConfirmCard.propTypes = {
    modalUsed: PropTypes.bool.isRequired,
    listId: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired,
    onCloseModal: PropTypes.func.isRequired
}