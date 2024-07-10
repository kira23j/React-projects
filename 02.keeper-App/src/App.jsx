import React from "react";
import Header from "./components/Header";
import Note from "./components/Note"
import Footer from "./components/Footer";
import notes from "./components/notes";

function createNote(noteItem){
  return <Note 
  title={noteItem.title}
  content={noteItem.content}
  />
}
function App(){
  return(
    <>
    <Header/>
    < div className="notes-container">
   {notes.map(createNote)}
   </div>
```<Footer />
    </>
  );

}
export default App;