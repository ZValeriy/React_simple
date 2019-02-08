import React from "react";

function Joke(joke) {
    return (
        <div>
            <h3 style={{display: joke.question ? "block" : "none"}}><font color="#3AC1EF">▍{joke.question}</font></h3>
            <p>{joke.punchLine}</p>
            <hr />
        </div>
    )
}

export default Joke;