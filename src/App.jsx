import React from "react";
import { useState } from  "react";
import './App.css'  


function App() {

 let [count,setCount] =useState(0)

  //  let count = 0;

   let increase=()=>{
    if(count<20){
    count= count+1;
    setCount(count);
    }
   }
   let decrease=()=>{
    if(count>0){
    count=count-1;
    setCount(count);
    }
   }

  return (
  <div className="main1">
  <h1>counter app</h1>
  <button onClick={increase}> increase</button>
  <h3>counter {count}</h3>
  <button onClick={decrease} >decrease</button>
  </div>
  )
}

export default App
