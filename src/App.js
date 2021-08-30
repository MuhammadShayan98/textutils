import { Navbar } from './Components/Navbar';
import { TextForm } from './Components/TextForm';
import React, { useState } from 'react'




function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="Textutils" home="Home" mode={mode} changeMode={changeMode} />
      <div className="container my-3" >

        <TextForm heading="Enter the text for Analysis" mode={mode} />

      </div>

    </>
  );
}
export default App;
