import { useState } from "react";

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
                </div>
            <button onClick={addIndex}>Next</button> <button onClick={subIndex}>Previous</button>

           {/* {props.cardv.map((el)=>{           
           })}
            <div>  
            {props.cardv[index]?.word}
                 */}
                
                {/* <div>

                </div> */}
    
             {/* </div> */}
     </div>);
}



 
export default CardViewer;