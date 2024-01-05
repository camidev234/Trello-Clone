import '../assets/css/ModalInfo.css';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { TrelloContext } from '../context/TrelloContext';

export const CardInfo = ({ isOpen, onCloseCardInfo, listName, listId, cardIndex }) => {

  const { onSaveCardNotes } = useContext(TrelloContext);

  const [note, setNote] = useState("Your notes here...");

  const closeCardInfo = () => {
    onCloseCardInfo();
  };

  const cardNotesInfoRef = useRef(null);
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (cardNotesInfoRef.current) {
      cardNotesInfoRef.current.style.border = '2px solid #2193b0';
    }

    inputRef.current.style.cursor = 'text';
  };

  const handleInputChange = (e) => {
    setNote(e.target.textContent); // Actualiza el estado note con el contenido de la etiqueta <p>
  };

  const handleContainerClick = () => {
    cardNotesInfoRef.current.style.border = 'none';
    inputRef.current.style.cursor = 'pointer';
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const saveNotes = () => {
    onSaveCardNotes(listId, cardIndex, note);
  }
  

  return (
    <section
      className={isOpen ? 'modalVisible infoModalContent' : 'modalNone'}
    >
      <section className="modalInfoContent" onClick={handleContainerClick}>
        <section className="infoTitle">
          <div className="titleInfo">
            <h4>Card Title</h4>
            <span id="span">On: {listName}</span>
          </div>
          <div className="closeModal">
            <button onClick={closeCardInfo}>
              <BsX style={{ fontSize: '29px' }} />
            </button>
          </div>
        </section>
        <section className="cardNotes">
          <div className="tn">
            <h4>Notes</h4>
          </div>
          <div className="cardNotesInfo" ref={cardNotesInfoRef}>
            <p
              contentEditable={true}
              onClick={handleFocus}
              ref={inputRef}
              defaultValue={note}
              onFocus={handleFocus}
              onClick={handleInputClick}
              onInput={handleInputChange}
            >
              Add your notes here...
            </p>
          </div>
          <div className="saveNote">
            <button className='btnsave' onClick={saveNotes}>Save</button>
          </div>
        </section>
      </section>
    </section>
  );
};

CardInfo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseCardInfo: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired,
  listId: PropTypes.number,
  cardIndex: PropTypes.number
};
