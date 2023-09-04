 import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextUtile from './Component/TextUtile';

  function App() {
     const togallMood = () =>{
      if(mood === "dark"){
        setMood("light")
         document.body.style.backgroundColor="white";
        document.body.style.color="black";
        // console.log("light ho gya")
      }else{
        setMood("dark")
         document.body.style.backgroundColor="black";
        document.body.style.color="white";
      }
    };
    const [mood , setMood] = useState("light");
    const [moodName , setmoodName] = useState("Enable Dark Mood")
  return ( 
    <>
         <Navbar togallMood={togallMood} mood ={mood}  title="TextUtils" home="Home" about="About Us" /> 
          <TextUtile heading="Your Input !" />  
    </>
    );
}
export default App;
 