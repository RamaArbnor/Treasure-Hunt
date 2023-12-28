import React, {useEffect, useState} from "react";
import rickroll from "../images/rickrollClear.png"

export default function LevelThree({Level, setLevel}){

    const [solved, setSolved] = useState(false);
    const [answer, setAnswer] = useState("");
    const solution = "rickroll"

    useEffect(() => {
        if (answer.toLowerCase() === solution) {
            setSolved(true);
        }
        else {
            setSolved(false);
        }
    }, [answer])

    return(
        <div className="LevelThree">
            <h2>Third Floor</h2>
            <p>Within the depths of the lost city, explorers stumble upon the Melodic Mirage—a chamber echoing with an elusive song. Legends suggest this melody conceals more than meets the ear, guiding the astute towards a hidden twist. Amidst the harmonies, keen ears may unveil a concealed code, adding a digital layer to the ancient tune's mysterious allure.</p>
            <img src={rickroll} />
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            {solved && (
                <div>
                    <p>Correct!</p>
                    <button onClick={() => setLevel(4)}>Next Floor</button>
                </div>
            )    
            }
        </div>
    )
}