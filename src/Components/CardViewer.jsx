import { useState } from "react";

const CardViewer = (props) => {
    const[index,setIndex]=useState(0)
    const updateIndex=()=>{
        setIndex(index+1)
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
            <button onClick={updateIndex}>Next</button>

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