import { Navbar } from './Components/Navbar';
import { TextForm } from './Components/TextForm';
import React, { useState } from 'react'
import { Alert } from './Components/Alert';



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been Enabled","success");
     
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled","success");
    }
  }

  return (
    <>
      <Navbar title="Textutils" home="Home" mode={mode} changeMode={changeMode} alert={alert} showAlert={showAlert}/>
      <Alert alert={alert} showAlert={showAlert}/>
      <div className="container my-3" >

        <TextForm heading="TextUtils - Word counter,Character counter,Convert Text into UpperCase,LowerCase and TitleCase" mode={mode} alert={alert} showAlert={showAlert} />

      </div>

    </>
  );
}
export default App;
