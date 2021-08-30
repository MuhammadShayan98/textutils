import React, { useState } from 'react'

export const TextForm = (props) => {

    const handleonClick = () => {
        // console.log("clicked");
        let textChange = Text.toUpperCase();
        setText(textChange);
    }

    const handleLoClick = () => {
        // console.log("clicked");
        let textChange = Text.toLowerCase();
        setText(textChange);
    }


    const handleClear = () => {
        let changes = "";
        setText(changes);
    }
    const handleTitleCase = () => {

        const words = Text.toLowerCase().split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

        }
        return setText(words.join(' '))
    }


    const handleCopy = () => {
        let copy = document.getElementById("box")
        copy.select();
        navigator.clipboard.writeText(copy.value);

    }

    const handleExtraSpaces = () => {
        let rmSpace = Text.replace(/\s+/g, " ")
        setText(rmSpace);

    }


    const handleonChange = (event) => {
        // console.log("onChange Fired");
        setText(event.target.value);
    }

    const [Text, setText] = useState("")
    return (
        <>
            <div>

                <div className="mb-3" style={{color : props.mode==="dark"? "white" : "black"}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={Text} onChange={handleonChange} id="box" rows="10" style={{backgroundColor : props.mode==="dark"? "#343a40" : "white" ,color : props.mode==="dark"? "white" : "black"}}></textarea>
                </div>
                <button type="button " onClick={handleonClick} className={`btn btn-${props.mode==="light"? "dark" :"light"} mx-1 my-2`} >Change into UpperCase</button>
                <button type="button " onClick={handleLoClick} className={`btn btn-${props.mode==="light"? "dark" :"light"} mx-1 my-2`} >Change into LowerCase</button>
                <button className={`btn btn-${props.mode==="light"? "dark" :"light"} mx-1 my-2`} onClick={handleTitleCase}>TitleCase</button>
                <button className={`btn btn-${props.mode==="light"? "dark" :"light"} mx-1 my-2`}  onClick={handleCopy}>Copy Text </button>
                <button className={`btn btn-${props.mode==="light"? "dark" :"light"} mx-1 my-2`}  onClick={handleExtraSpaces}>Remove Extra Space</button>
                <button className={`btn btn-${props.mode==="light"? "dark" :"light"} mx-1 my-2`}  onClick={handleClear} >Clear Text</button>

            </div>
            <div className="container my-4" style={{color : props.mode==="dark"? "white" : "black"}}>
                <h2>Summary</h2>
                <p>Total Words  {Text.split(" ").length} </p>
                <p> Total Characters  {Text.length}</p>
                <p>{0.008 * Text.length} mins to read the text</p>
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text :"Write something above for preview"}</p>
            </div>
        </>
    )
}










