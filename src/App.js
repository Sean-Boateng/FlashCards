import React,{ useEffect, useState } from "react";
import axios from 'axios';
import Sidebar from "./Components/Sidebar";
import Header from './Components/Header';
import CardViewer from './Components/CardViewer'
import Card from "./Components/Card";



function App() {
  const[collection, setCollection]= useState([])
  const[collectionBy, setCollectionBy]= useState([])
  const[saveid,setsaveId] = useState([])
  const[displayform,setDisplayForm]= useState([])

  useEffect(()=>{
    getAllCollections();
    collectionItems(1);
    
    
    
  },[])
 
  async function getAllCollections(){
    let response = await axios.get(`http://127.0.0.1:8000/api/collections/`);
    setCollection(response.data);
    
  }
  async function collectionItems(collectionID){
    let response = await axios.get(`http://127.0.0.1:8000/api/collections/${collectionID}/cards/`);
    setsaveId(collectionID)
    setCollectionBy(response.data)
  }
  async function addNewCard(newEntry){
    let response = await axios.post(`http://127.0.0.1:8000/api/collections/${saveid}/cards/`, newEntry);
    if (response.status===201){
      await collectionItems()
    }
    setCollectionBy(response.data)
  }

  async function deleteCard(id){
    let response = axios.delete(`http://127.0.0.1:8000/api/collections/${saveid}/cards/${id}/`)
    .then(() => this.setCollectionBy({ status: 'Delete successful' }))
  }

  return (
    <div>
      <Header/>
      <Sidebar collection = {collection}collectionItems={collectionItems}/>
      

      

      <div>
        <button onClick={()=>setDisplayForm(!displayform)}>Add New Card</button>
        {displayform ? <CardViewer cardv ={collectionBy} deleteCard={deleteCard}/>: <Card AddNewCard={addNewCard}/>}
        </div>
        
    </div>
  );
}

export default App;
