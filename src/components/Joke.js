import React from "react";

function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.joke.question ? "block" : "none"}}><font color="#3AC1EF">▍{props.joke.question}</font></h3>
            <p>{props.joke.punchLine}</p>
            <hr />
        </div>
    )
}

export default Joke;