import React, { useState } from 'react';
export default function Text() {
    const [text,settext]=useState("Enter text here");
    function capitalize()
    {
        console.log("hii working capitalize");
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    function changing(event){
        console.log("changing ");
        settext(event.target.value);
    }
    function Copytext(){
        navigator.clipboard.writeText(text);
        console.log("copied");

    }
    return (
        <div>
            <div className="container my-5">

            <div className="mb-3">
                <h3>Enter your text for analyze</h3>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changing}></textarea>
      <button type="button" className="btn btn-dark my-5" onClick={capitalize} >Capitalize</button>
      <button type="button" className="btn btn-dark my-5 mx-3" onClick={Copytext} >Copy Text</button>
    </div>
        </div>
            </div>
    )
}
