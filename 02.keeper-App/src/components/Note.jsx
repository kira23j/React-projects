import React from "react";
import '../styles/keeper.css';
function Note(props){
    return (
        <div className="notes">
            <h1>{props.title}</h1>
            <h2>{props.content}</h2>
        </div>
        
    );
};
export default Note;