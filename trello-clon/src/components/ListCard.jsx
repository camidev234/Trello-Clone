import { useState, useContext, useRef, useEffect } from "react";
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

  const inputRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <div className="listContainer"  >
      <article className="title">
        <h5>
          <input
            type="text"
            value={titleContent}
            onChange={handleTitleChange}
            placeholder="Title here"
            ref={inputRef}
            required
          />
        </h5>
      </article>
      <section className="cards">
        {listCards
          .filter((listCard) => listCard.listCardId === uniqueId)
          .map((listCard) =>
            listCard.cards.map((card) => (
              <div className="contCard" key={card.cardId} >
                <Card />
              </div>
            ))
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
