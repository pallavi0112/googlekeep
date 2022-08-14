import React , {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import {Button} from 'reactstrap';

const CreateNote = (props) =>{
    const [expand , setExpand] = useState(false)
    const MakeExpandTrue = () =>{
        setExpand(true)
    }
    const MakeExpandFalse = () =>{
        setExpand(false)
    }
    const [note , setNote] = useState({
        title:"",
        text :""
    })
    const GetInputValue = (e) =>{
      const {name , value} = e.target ; 
            setNote((predata) => {
                return {
                    ...predata,
                    [name] : value
                }
            })
        
   
    }
    const Takefunc = () =>{
            props.passfunc(note)
            setNote({
                title:"",
                text:""
            });
    };
    return ( 
        <>
           <div className="container shadow bg-light" onDoubleClick={MakeExpandFalse}>
            <form  className="input-fields">
                {expand ? 
                <input type="text"  value={note.title} name="title"  onChange={GetInputValue} placeholder="Title"></input> : null}
                <textarea rows="" columns="" value={note.text}  name="text"  onChange={GetInputValue} onClick={MakeExpandTrue} placeholder="Write a note....."></textarea>
            {expand ? <Button class="white" className="button shadow text-warning" onClick={Takefunc}>
                <AddIcon className="btn-icon"/>
            </Button> : null }
            </form>
           </div>
        </>
    )
}

export default CreateNote;