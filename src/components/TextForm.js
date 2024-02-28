import React, { useState } from "react";

export default function TextForm(props) { 
  const handleUpclick = () => {
    // console.log("uppercase was clicked"+ text );
    let newText = text.toUpperCase();
    setText(newText)};
  


  const handleLoclick = () => {
    // console.log("uppercase was clicked"+ text );
    let newText = text.toLowerCase();
    setText(newText)};
  


  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  };
  const [text, setText] = useState('');
  return (
    <>
    <div className="container"style={{color:props.mode ==='dark'?'white':'#042743'}}>
      <h1>{props.Heading}</h1>
      <div className='mb-3'>
        <textarea className= "form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}} id="My Box" rows ="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1"onClick={handleLoclick}> convert to lower case</button>
      <button className="btn btn-primary mx-1"onClick={handleUpclick}> convert to upper case</button>
      
    </div>
    <div className="container"style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2>your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes  Read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter Something To preview it here"}</p>
    </div>
    </>
  )
}
