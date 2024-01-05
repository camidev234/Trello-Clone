import { useState, useEffect, useRef, useContext } from 'react'
import '../assets/css/Card.css'
import { BsFillTrash3Fill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { TrelloContext } from '../context/TrelloContext';

export const Card = ({ listId, cardId }) => {

    const { onDeleteCard } = useContext(TrelloContext);

    const [ title, setTitle] = useState('');

    const textareaRef = useRef(null);

    useEffect(() => {
        textareaRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setTitle(e.target.value)
    };
    
    const handleInput = (e) => {
        const inputElement = e.target;
        inputElement.style.height = 'auto';
        inputElement.style.height = `${inputElement.scrollHeight}px`;
      };


    const deleteCard = () => {
        onDeleteCard(listId, cardId);
    }

    return (
        <div
         className="card"
        >
            <article className="CardTitle">
            <textarea
            onChange={handleChange}
            onInput={handleInput}
            value={title}
            ref={textareaRef}
        />
            </article>
            <article className="delete">
                <button onClick={deleteCard}><BsFillTrash3Fill /></button>
            </article>
        </div>
    )
}

Card.propTypes = {
    listId: PropTypes.number.isRequired,
    cardId: PropTypes.number.isRequired
}