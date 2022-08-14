import React  from "react";
import Note from './Note';
const Notes = (props) =>{
    const onDelete = (id) =>{
        props.Deletebtn(id);
    }
    return(
        <>
            <div className="main-container">
            {
               props.Items.map((val, index) =>{
                  return <Note key={index} id={index} title={val.title} content={val.text} DeleteItems = {onDelete}/>
               }) 
            }
                
            </div>
        </>
    )
};

export default Notes;