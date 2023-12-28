import React, { useEffect, useState } from "react";

export default function LevelFour({ Level, setLevel}) {

    const [solved, setSolved] = useState(false);
    const [answer, setAnswer] = useState("");
    const solution = "notch"

    useEffect(() => {
        if (answer.toLowerCase() == solution) {
            setSolved(true);
        }
        else {
            setSolved(false);
        }
    }, [answer])

    return(
        <div className="LevelFour">
            <h2>Fourth Floor</h2>
            <p>As the adventurers progress through the lost city, they find themselves standing on the threshold of a mystical portal that transports them to a realm unlike any other. The air is charged with pixelated energy, and the surroundings take on a blocky, cubic form. This is the Pixelated Realm, a dimension where the language of blocks holds the key to the next revelation. What is todays message?</p>
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            {solved && (
                <div>
                    <p>Correct!</p>
                    <button onClick={() => setLevel(5)}>Next Floor</button>
                </div>
            )    
            }
        </div>
    )

}