import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container'>

                <div class="mb-3" >
                    <h1>{props.heading} </h1>

                    <textarea ClassName="form-control" value={text} onChange={handleOnChange} id="myBox" cols="100" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-outline-danger mx-3 " onClick={handleLoClick} >lowercase</button>
                <button className="btn btn-outline-danger mx-3 " onClick={handleClearClick} >Clear</button>

            </div>
            <div className="container my-3" >
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>


            </div >
        </>
    )
}
