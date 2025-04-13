import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        //console.log("on change");
        setText(event.target.value)

    }
    const handleUpClick = () => {
        //console.log("Uppercase button is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }


    const handleLoClick = () => {
        //console.log("lowercase button is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleToRemoveExtraSpace = () => {
        //regex function ,first 1 se jyada space hogi toh text ko split kiya,
        //  badme single space se uss newtext ko join kiya
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed!", "success");
    }

    const handleClearText = () => {
        //regex function ,first 1 se jyada space hogi toh text ko split kiya badme single space se uss newtext ko join kiya
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared!", "success");
    }

    const handleCopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard!", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? '#042743' : 'white' }}></textarea>
                </div>
            </div>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowecase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleToRemoveExtraSpace}>Remove extra space</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear the text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy the text</button>

            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>View Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview.'}</p>
            </div>
        </>
    )
}
