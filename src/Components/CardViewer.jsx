import { useState } from "react";

const CardViewer = (props) => {
    const[index,setIndex]=useState(0)
    return ( 
        <div>
            {/* <button onClick={setIndex(index+1)}>Next</button> */}
            <div>  
                {props.cardv[index]?.word}
                
                                
                 
                
             </div>
     </div>);
}
 
export default CardViewer;