import React from "react"
import Joke from "./components/Joke";

function App() {
    return (
        <div className="jokes">
            <Joke 
                joke = {{
                    punchLine: "Ниче"
                }}
            />
            
            <Joke 
                joke = {{
                    question: "Ну че?",
                    punchLine: "Ниче"
                }}
            />
            
            <Joke 
                joke = {{
                    question: "Ну че?",
                    punchLine: "Ниче"
                }}
            />
            
            <Joke 
                joke = {{
                    question: "Ну че?",
                    punchLine: "Ниче"
                }}
            />
        </div>
    )
}

export default App