
import { useState } from "react";
import deleteCard from "../App";


const CardViewer = (props) => {
    const[index,setIndex]=useState(0)
    const addIndex=()=>{
        setIndex(index+1)
        setState(!state)
        console.log(index)
    }
    const subIndex=()=>{
        setIndex(index-1)
        setState(!state)
        console.log(index)
    }
    const[state,setState]=useState(false);
    const toggle=()=>{
        setState(!state)
    }

    


    return ( 
        <div>
            
            <div onClick={toggle}>
                {state ? props.cardv[index]?.definition:props.cardv[index]?.word}                                                                         
            
            <button onClick={addIndex}>Next</button> <button onClick={subIndex}>Previous</button> 

            <button onClick={()=>props.deleteCard(props.cardv[index].id)}>Delete</button>
            </div>
            

        </div>);
        
}



 
export default CardViewer;