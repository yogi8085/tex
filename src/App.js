import logo from "./logo.svg";
import "./App.css";
import Home from "./components/TextForm";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import React, { useState } from 'react';
import { Routes,Route} from 'react-router-dom'
import {

  Switch,
  route,
  Link
} from "react-router-dom";


function App() {
  
  const  [mode, setMode] = useState('light');// wethar dark mode is eneble or note
  const  [alert, setAlert] = useState(null);

  const  showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
 
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode  ('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode is enable","success");


    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enable","success");

    }
   }
    return (
     <>
      {/* <Navbar title="textutils2" mode={mode} toggleMode={toggleMode} About Text="About"/> */}
      
      <Navbar title="textutils2" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About  />}/>
         </Routes>
      </div>

     
</>
  );
}

export default App;
