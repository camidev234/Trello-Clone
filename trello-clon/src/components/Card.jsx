import { useState, useEffect, useRef } from 'react'
import '../assets/css/Card.css'
import { BsFillTrash3Fill } from "react-icons/bs";

export const Card = () => {

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
                <button><BsFillTrash3Fill /></button>
            </article>
        </div>
    )
}