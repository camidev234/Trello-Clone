import { useContext, useState } from "react";
import { TrelloContext } from "../context/TrelloContext";
import { ListCard } from "./ListCard"; 
import { BsPlusLg } from "react-icons/bs";
import '../assets/css/ListsContainer.css'

export const ListsContainer = () => {
  const { listCards, onAddListCard } = useContext(TrelloContext);

  const [ addIsUsed, setAddIsUsed ] = useState(false);


  const addListCard = () => {
    setAddIsUsed(true)
    onAddListCard();
  };

  const updateStatus = () => {
    setAddIsUsed(false);
  }
  return (
    <section className="lContainer">
    <section className="listsContainer">
      {
        listCards.map((card) => {
            return (
              <div className="cccc" key={card.listCardId}>
                <ListCard 
                onUpdateStatus={updateStatus} 
                state={addIsUsed} 
                uniqueId={card.listCardId}
                />
              </div>
            )
        })
      }
      <article className="addContainer">
        <button onClick={addListCard} 
        className={addIsUsed ? 'buttonNotVisible' : 'buttonVisible'}
        >
        <BsPlusLg />Add Other List
        </button>
      </article>
    </section>
    </section>
  );
};
