import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

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
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
        <Alert alert={alert}/>
        <div className="container my-5">
          {/* <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <TextForm heading="Enter text here" mode={mode} showAlert={showAlert}/>
              </Route>
          </Switch> */}
          <TextForm heading="Enter text here" mode={mode} showAlert={showAlert}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
