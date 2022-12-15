import React,{ useEffect, useState } from "react";
import axios from 'axios';
import Sidebar from "./Components/Sidebar";
import Header from './Components/Header';
import CardViewer from './Components/CardViewer'


function App() {
  const[collection, setCollection]= useState([])
  const[collectionBy, setCollectionBy]= useState([])
  

  useEffect(()=>{
    getAllCollections();
    
    
  },[])
 
  async function getAllCollections(){
    let response = await axios.get(`http://127.0.0.1:8000/api/collections/`);
    setCollection(response.data);
    
  }

  async function collectionItems(collectionID){
    let response = await axios.get(`http://127.0.0.1:8000/api/collections/${collectionID}/cards/`);
    setCollectionBy(response.data)
  }


  return (
    <div>
      <Header/>
      <Sidebar collection = {collection}collectionItems={collectionItems}/>
      <CardViewer cardv ={collectionBy}/>
    </div>
  );
}

export default App;
