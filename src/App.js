import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";

import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');

  let toogleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
      <div className="container my-5">
        <TextForm heading="Enter text here" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
