import { useState, useEffect, useRef } from 'react'
import '../assets/css/Card.css'
import { BsFillTrash3Fill, BsEyeFill } from "react-icons/bs";
import PropTypes from 'prop-types';
// import { TrelloContext } from '../context/TrelloContext';
import { ConfirmCard } from './ConfirmCard';
import { CardInfo } from './CardInfo';

export const Card = ({ listId, cardIndex, listName }) => {

    // const { onDeleteCard } = useContext(TrelloContext);

    const [ title, setTitle] = useState('');

    const [ modalUsed, setModalUsed ] = useState(false);

    const [ infoView, setInfoView ] = useState(false);

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


    const openModal = () => {
        setModalUsed(true);
    }

    const closeModal = () => {
        setModalUsed(false);
    }

    const openCardInfo = () => {
        setInfoView(true);
    }

    const closeCardInfo = () => {
        setInfoView(false);
    }

    return (
        <>
        <div
         className="card"
        >
            <article className="CardTitle">
            <textarea
            onChange={handleChange}
            onInput={handleInput}
            placeholder='Card Title'
            value={title}
            ref={textareaRef}
        />
            </article>
            <article className="actionsCard">
                <button onClick={openModal}><BsFillTrash3Fill style={{fontSize: '11px'}}/></button>
                <button onClick={openCardInfo}><BsEyeFill style={{fontSize: '11px'}}/></button>
            </article>
        </div>

        <div className="mm">
            <div className="modalComponent">
                <ConfirmCard listId={listId} cardIndex={cardIndex} modalUsed={modalUsed} onCloseModal={closeModal}/>
            </div>
        </div>

        <div className="cardInfo">
            <CardInfo 
             isOpen={infoView} 
             onCloseCardInfo={closeCardInfo} 
             listName={listName} 
             listId={listId} 
             cardIndex={cardIndex}
            />
        </div>

        </>
        
    )
}

Card.propTypes = {
    listId: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired,
    listName: PropTypes.string.isRequired
}