import { useState, useContext, useEffect } from "react";
import { TrelloContext } from "../context/TrelloContext";
import { BsX, BsPlusLg } from "react-icons/bs";
import '../assets/css/ListButton.css';

export const ListButton = ({ onUpdateStatus, addIsUsed }) => {



  const [ btnIsUsed, setBtnIsUsed ] = useState(false);

  const { onDeleteListCard } = useContext(TrelloContext);

  const deleteCard = () => {
    onDeleteListCard();
    onUpdateStatus();
  }

  const handleClick = () => {
      setBtnIsUsed(true);
      onUpdateStatus();
  }

  return (
    <section className="contBotons">
    <div className={!btnIsUsed ? 'addIsVisible actions' : 'addNoVisible actions'}>
      <button onClick={handleClick} id="btnOne">Add List</button>
      <button onClick={deleteCard} className="second">
        <BsX style={{ fontSize: "18px" }} />
      </button>
    </div>
    <div className="acCont">
    {
      btnIsUsed ? 
        <div className="actions">
          <div id="contBtn">
            <button type="submit" id="boton"><BsPlusLg /><span>Add new card</span></button>
          </div>
        </div> : null
    }
    </div>
    </section>
  );
};
