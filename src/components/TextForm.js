import React, {useState} from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log('UpClick pressed');
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase","success");
  }
  const handleLowClick = (e)=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase","success");
  }

  const handleOnChange = (e)=>{
    console.log('onChange');
    setText(e.target.value);
  }

  const clearTextArea = ()=>{
    setText("");
    props.showAlert("Text area cleared","warning");
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
          <h1 style={{color : props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
          <div className="mb-3 my-4">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
              style={{ backgroundColor : props.mode === 'light' ? 'grey' : 'white', color : props.mode === 'light' ? 'white' : 'black' }}></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-warning mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
          <button className="btn btn-danger mx-2" onClick={clearTextArea}>Clear Text Area</button>
      </div>
      <div className="container my-5" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
        <h1>Text Summary</h1>
        <p>Text has {text.split(" ").length} words and {text.length} characters.</p>
        <p>It will take average of {text.split(" ").length*0.008} minutes to read the whole paragraph.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text in the box to preview here."}</p>
      </div>
    </>
  );
}

