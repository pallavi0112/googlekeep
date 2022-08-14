import React,{useState} from "react";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
const App = () =>{
  const [addItems , setAddItems] = useState([]);
  const Addnote = (note) =>{
      if(note.title !== "" && note.text !== ""){
        setAddItems((predata)=>{
             return [...predata , note]
        })
      }
      else{
       alert('before adding make a note!!!')
      }
  }
  const DeleteNote = (id) =>{
    setAddItems((oldeItems => oldeItems.filter((curdata , index) => { return index !== id})))
    }
  return(
    <>
      <Header/>
      <CreateNote passfunc = {Addnote}/>
      <Notes Items = {addItems} Deletebtn = {DeleteNote}/>
      <Footer/>
    </>
  )
};

export {App} ;