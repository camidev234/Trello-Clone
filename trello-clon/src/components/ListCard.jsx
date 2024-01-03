import { useState, useContext } from "react";
import "../assets/css/ListCard.css";
import { ListButton } from "./ListButton";
import PropTypes from "prop-types";
import { Card } from "./Card";
import { TrelloContext } from "../context/TrelloContext";

export const ListCard = ({ onUpdateStatus, uniqueId }) => {
  const [titleContent, setTitleContent] = useState("");
  const { listCards } = useContext(TrelloContext);

  const handleTitleChange = (e) => {
    setTitleContent(e.target.value);
  };


  return (
    <div className="listContainer"  >
      <article className="title">
        <h5>
          <input
            type="text"
            value={titleContent}
            onChange={handleTitleChange}
            placeholder="Title here"
           
            required
          />
        </h5>
      </article>
      <section className="cards">
        {listCards
          .filter((listCard) => listCard.listCardId === uniqueId)
          .map((listCard) =>
            listCard.cards.map((card) => <Card key={card.cardId} />)
          )}
      </section>
      <article className="bnts">
        <ListButton onUpdateStatus={onUpdateStatus} uniqueId={uniqueId}/>
      </article>
    </div>
  );
};

ListCard.propTypes = {
  onUpdateStatus: PropTypes.func.isRequired,
  uniqueId: PropTypes.number,
};

export default ListCard;
