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
              cardId: listCard.cards.length+1,
              notes: 'sdsd'
            });
          }
          return listCard;
        });
        setListCards(updatedListCards);
      };

    
      const deleteCard = (listId, cardIndex) => {
        // console.log(listCards.filter((lc) => lc.listCardId === listId))

        const updatedListCards = listCards.map((listCard) => {
            if(listCard.listCardId === listId){
                listCard.cards.splice(cardIndex, 1);
                // console.log(listCard.cards);
            }
            return listCard;
        });

        setListCards(updatedListCards);
      }

    return (
        <TrelloContext.Provider value={{
            listCards,
            onAddListCard: addListCard,
            onDeleteListCard: deleteListCard,
            onAddCardInList: addCardInList,
            onDeleteCard: deleteCard
        }}>
            {props.children}
        </TrelloContext.Provider>
    )
}

TrelloContextProvider.propTypes = {
    children: PropTypes.node
}