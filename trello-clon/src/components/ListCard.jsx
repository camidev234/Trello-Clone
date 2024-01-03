import { useState, useContext, useEffect } from "react";
import "../assets/css/ListCard.css";
import { ListButton } from "./ListButton";

export const ListCard = ({ onUpdateStatus, addIsUsed }) => {
  const [titleContent, setTitleContent] = useState("");

  const handleTitleChange = (e) => {
    setTitleContent(e.target.value);
  };


  return (
    <div className="listContainer">
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
      <article>
        <ListButton
            onUpdateStatus={onUpdateStatus}
        />
      </article>
    </div>
  );
};
