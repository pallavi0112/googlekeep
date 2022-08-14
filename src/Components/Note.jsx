import React  from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {Button} from 'reactstrap';
const Note = (props) =>{
    
    const DeleteNote = () =>{
        props.DeleteItems(props.id);
    }
    return(
        <>
            <div className="note-container shadow ">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <Button className="delete-btn text-warning" onClick={DeleteNote}>
                <DeleteOutlineIcon className="delete-icon"/>
                </Button>
            </div>
        </>
    )
};

export default Note ;