import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toogleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode Enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light Mode Enabled","Success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm heading="Enter text here" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
