import React, {useState} from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log('UpClick pressed');
    setText(text.toUpperCase());
  }
  const handleLowClick = (e)=>{
    setText(text.toLowerCase());
  }

  const handleOnChange = (e)=>{
    console.log('onChange');
    setText(e.target.value);
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container my-3">
          <h1>{props.heading}</h1>
          <div className="mb-3 my-4">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-warning" onClick={handleLowClick}>Convert to LowerCase</button>
      </div>
      <div className="container my-5">
        <h1>Text Summary</h1>
        <p>Text has {text.split(" ").length} words and {text.length} characters.</p>
        <p>It will take average of {text.split(" ").length*0.008} minutes to read the whole paragraph.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

