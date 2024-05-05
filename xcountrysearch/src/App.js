import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card";
import styles from "./Card/Card.module.css";

function App() {
  const [data,setData]=useState([]);
useEffect(()=>{
  (async ()=>{
    var resp = await axios.get("https://restcountries.com/v3.1/all");
    setData(resp.data)
    //console.log(data)
  })();
})

function filterSearch(element)
{
  return element.toString().length <= 6
}

function searchText(text){
  data.filter(filterSearch);
  //data.filter((country)=>{return country.indexOf(text)!=-1})
  console.log(data)
  //data.filter((e)=>{})
  
}
  return (
    <div className="App">
      <input className={styles.search} onChange={(e)=>{searchText(e.target.value)}}/>
      <div className={styles.flags}>
        {data.map((flagData)=>(<Card data = {flagData}/>))}
        </div>
    </div>
  );
}

export default App;
