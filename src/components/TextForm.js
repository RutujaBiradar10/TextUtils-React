import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleloClick = () => {
       console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
       console.log("Clear was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }
   
    const handleOnChange = (event) => {
      console.log("On change");
      setText(event.target.value);
    }

    const handleCopy = () => {
      console.log("I am copy");
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!", "success");
    }

    const handleExteraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "success");
    }
    
    const[text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}}
         id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}> Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExteraSpaces}>Remove Extra Spaces</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.001 * text.length} minutes read</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter text in the textbox above to preview it here."}</p>
    </div>
    </>

  )
}
