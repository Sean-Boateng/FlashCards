import React, { useState } from 'react';


const Card = (props)=>{
    const[word,setWord]= useState('')
    const[definition,setDefinition]= useState('')


    

    function handleSubmit(card){
        card.preventDefault();
        let newEntry={
            word: word,
            definition:definition
        };
        debugger
        console.log(newEntry)
        props.AddNewCard(newEntry)

    
    }
    return(
        <form onSubmit={handleSubmit}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Word </label>
            <input type='string' value ={word} onChange={(event)=>setWord(event.target.value )}/><br/>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Description</label>
            <input type='string' value ={definition} onChange={(event)=>setDefinition(event.target.value )}/><br/>
            <button>Add</button>
        </form>
    )
}

export default Card;



