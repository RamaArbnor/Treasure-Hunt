import React, { useEffect, useState } from "react";

export default function LevelOne({ Level, setLevel}) {

    const [solved, setSolved] = useState(false);
    const [answer, setAnswer] = useState("");
    const solution = "a din me ba fli ti"
    const [hint, setHint] = useState("Hint");

    useEffect(() => {
        if (answer === solution) {
            setSolved(true);
        }
        else {
            setSolved(false);
        }
    }, [answer])

  return (
    <div className="LevelOne">
        <h2>First Floor</h2>
        <p>The adventurers find themselves at the entrance of the lost city, where a weathered stone gateway stands. Engravings on the gateway suggest that it holds the key to unlocking the path deeper into the city. Legends speak of a forgotten language that guards the secrets of the lost city, and the adventurers believe that deciphering this ancient script is the first step to revealing the mysteries within.</p>
        <h3>h kpu tl ih msp ap</h3>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        {solved && (
            <div>
                <p>Correct!</p>
                <button onClick={() => setLevel(2)}>Next Floor</button>
            </div>
        )    
        }
        <div className="hint" onClick={() => setHint("caesar, 7")}>
            {hint}
        </div>
    </div>
  );
}