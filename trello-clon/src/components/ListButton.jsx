import { useState, useContext } from "react";
import { TrelloContext } from "../context/TrelloContext";
import { BsX, BsPlusLg } from "react-icons/bs";
import '../assets/css/ListButton.css';
import PropTypes from 'prop-types';


export const ListButton = ({ onUpdateStatus, uniqueId }) => {

  const [ btnIsUsed, setBtnIsUsed ] = useState(false);

  const { onDeleteListCard, onAddCardInList } = useContext(TrelloContext);

  const deleteListCard = () => {
    onDeleteListCard();
    onUpdateStatus();
  }

  const handleClick = () => {
      setBtnIsUsed(true);
      onUpdateStatus();
  }

  const handleAddCard = () => {
    onAddCardInList(uniqueId);
  }

  return (
    <section className="contBotons">
    <div className={!btnIsUsed ? 'addIsVisible actions acMod' : 'addNoVisible actions'}>
        <div className="btnContainer">
        <button onClick={handleClick} id="btnOne">Add List</button>
        <button onClick={deleteListCard} id="second">
          <BsX style={{ fontSize: "18px" }} />
        </button>
      </div>
    </div>
    <div className="acCont">
    {
      btnIsUsed ? 
        <div className="actions acTwo">
            <button type="submit" id="boton" onClick={handleAddCard}><BsPlusLg /><span>Add new card</span></button>
        </div> : null
    }
    </div>
    </section>
  );
};

ListButton.propTypes = {
  onUpdateStatus: PropTypes.func,
  uniqueId: PropTypes.number
}
