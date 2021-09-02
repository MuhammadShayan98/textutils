import React, { useState } from 'react'

export const TextForm = (props) => {

    const handleonClick = () => {
        // console.log("clicked");
        let textChange = Text.toUpperCase();
        setText(textChange);
        props.showAlert("Converted into Upper Case", "success");

    }

    const handleLoClick = () => {
        // console.log("clicked");
        let textChange = Text.toLowerCase();
        setText(textChange);
        props.showAlert("Converted into Lower Case", "success");

    }


    const handleClear = () => {
        let changes = "";
        setText(changes);
        props.showAlert("Text Cleared", "success")
    }
    const handleTitleCase = () => {

        const words = Text.toLowerCase().split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

        }
        return [setText(words.join(' ')),
        props.showAlert("Converted into Title Case", "success")]

    }


    const handleCopy = () => {

        let copy = document.getElementById("Box")
        copy.select();
        navigator.clipboard.writeText(copy.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied!", "success")

    }

    const handleExtraSpaces = () => {
        let rmSpace = Text.replace(/\s+/g, " ")
        setText(rmSpace);
        props.showAlert("Extra Spaces has been removed", "success")

    }


    const handleonChange = (event) => {
        // console.log("onChange Fired");
        setText(event.target.value);
    }

    const [Text, setText] = useState("")
    return (
        <>
            <div>

                <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                    <h1 className="mb-4">{props.heading}</h1>
                    <textarea id="Box"  className="form-control" value={Text} onChange={handleonChange} rows="10" style={{ backgroundColor: props.mode === "dark" ? "#343a40" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
                </div>
                <button disabled={Text.length === 0} type="button " onClick={handleonClick} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-1 my-2`} >Change into UpperCase</button>
                <button disabled={Text.length === 0} type="button " onClick={handleLoClick} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-1 my-2`} >Change into LowerCase</button>
                <button disabled={Text.length === 0} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-1 my-2`} onClick={handleTitleCase}>TitleCase</button>
                <button disabled={Text.length === 0} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-1 my-2`} onClick={handleCopy}>Copy Text </button>
                <button disabled={Text.length === 0} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-1 my-2`} onClick={handleExtraSpaces}>Remove Extra Space</button>
                <button disabled={Text.length === 0} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-1 my-2`} onClick={handleClear} >Clear Text</button>

            </div>
            <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Summary</h2>
                <p>{Text.split(" ").filter((element) => { return element.length !== 0 }).length} <strong>Total Words</strong> </p>
                <p>{Text.replace(/\s+/g, "").length} <strong>Total Characters</strong></p>
                <p>{0.008 * Text.split(" ").filter((element) => { return element.length !== 0 }).length} <strong>Minute read</strong> </p>
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text : "Nothing to preview"}</p>
            </div>
        </>
    )
}










