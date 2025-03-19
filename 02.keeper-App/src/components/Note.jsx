import React from "react";
import "../styles/keeper.css";

const Note = ({ note, onDelete }) => {
  return (
    <div className="notes">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>
        ❌ Delete
      </button>
    </div>
  );
};

export default Note;
