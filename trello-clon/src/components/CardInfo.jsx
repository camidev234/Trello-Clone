import '../assets/css/ModalInfo.css';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';
import { useRef, useState } from 'react';

export const CardInfo = ({ isOpen, onCloseCardInfo, listName }) => {
  const [note, setNote] = useState('');

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

  const hanldeChangeNote = (e) => {
    setNote(e.target.value);
  };

  const handleContainerClick = () => {
    cardNotesInfoRef.current.style.border = 'none';
    inputRef.current.style.cursor = 'pointer';
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

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
              onChange={hanldeChangeNote}
              ref={inputRef}
              value={note}
              onFocus={handleFocus}
              onClick={handleInputClick}
            >
              Add your notes here...
            </p>
          </div>
          <div className="saveNote">
            <button className='btnsave'>Save</button>
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
};
