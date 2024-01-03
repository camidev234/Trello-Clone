import { createContext, useState } from "react";

export const TrelloContext = createContext();

export const TrelloContextProvider = (props) => {

    const [ listCards, setListCards ] = useState([]);

    const addListCard = () => {
        setListCards([...listCards, `The card ${listCards.length} is added`]);
    };

    const deleteListCard = () => {
        const newArray = [...listCards];
        newArray.pop();
        setListCards(newArray);
    }

    return (
        <TrelloContext.Provider value={{
            listCards,
            onAddListCard: addListCard,
            onDeleteListCard: deleteListCard
        }}>
            {props.children}
        </TrelloContext.Provider>
    )
}