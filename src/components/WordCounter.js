import React from "react";
import "./stylings.css"

function WordCounter(){
    let getPara = (c) => {
        if (c) {
        let count = c.trim().split(/\s+/).length;
        document.getElementById("span1").innerHTML = count;}
        else document.getElementById("span1").innerHTML = 0;
    }
    return <div className="container">
        <h1>Responsive Paragraph Word Counter</h1>
        <form>
            <textarea id="para" onChange={(e) => getPara(e.target.value)}>

            </textarea>
        </form>
        <p>Word Count: <span id="span1">0</span></p>
    </div>
}

export default WordCounter;