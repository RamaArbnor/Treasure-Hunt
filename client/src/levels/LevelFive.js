import { useState, useEffect } from "react"

export default function LevelFive({Level, setLevel}){

    const [solved, setSolved] = useState(false);    
    const [answer, setAnswer] = useState("");
    const solution = "pythagoras"

    useEffect(() => {
        if (answer.toLowerCase() === solution) {
            setSolved(true);
        }
        else {
            setSolved(false);
        }
    }, [answer])

    return(
        <div className="LevelFive">
            <p>
            In the Aegean's embrace, where history's whispers play,<br></br>
            An Isu vault slumbers, beneath Thera's golden ray.<br></br>
            Amidst Minoan Ruins, a philosopher did find,<br></br>
            The gateway to Atlantis, in knowledge enshrined.<br></br>
<br></br>
            Whose theorem, profound, with triangles did weave,<br></br>
            In geometric secrets, his intellect did he leave.<br></br>
            The philosopher's name, in numbers and squares,<br></br>
            Unlocks the vault's secrets, ascending the stairs.<br></br>
<br></br>
            Who sought among ruins, a gateway concealed,<br></br>
            An ancient city submerged, its wonders revealed?<br></br>
            In geometry's dance, the answer does sway,<br></br>
            To open the vault, what philosopher holds sway?<br></br>
            </p>
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            {solved && (
                <div>
                    <button onClick={() => setLevel(6)}>Finish</button>
                </div>
            )    
            }
        </div>
    )

}