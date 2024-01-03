import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const TrelloContext = createContext();

export const TrelloContextProvider = (props) => {

    const [ listCards, setListCards ] = useState([]);

    const addListCard = () => {
        setListCards([...listCards, {
            listCardId: listCards.length+1,
            cards: []
        }]);
    };

    const deleteListCard = () => {
        const newArray = [...listCards];
        newArray.pop();
        setListCards(newArray);
    }

    const addCardInList = (uniqueId) => {
        const updatedListCards = listCards.map((listCard) => {
          if (listCard.listCardId === uniqueId) {
            listCard.cards.push({
              cardId: listCard.cards.length + 1,
            });
          }
          return listCard;
        });
        console.log(updatedListCards);
        setListCards(updatedListCards);
      };

    return (
        <TrelloContext.Provider value={{
            listCards,
            onAddListCard: addListCard,
            onDeleteListCard: deleteListCard,
            onAddCardInList: addCardInList
        }}>
            {props.children}
        </TrelloContext.Provider>
    )
}

TrelloContextProvider.propTypes = {
    children: PropTypes.node
}