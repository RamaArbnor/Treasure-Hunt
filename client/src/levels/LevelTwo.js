import {JigsawPuzzle} from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../images/image0.jpg";
import scareImg from "../images/scare.jpg";
import React, { useEffect, useState } from 'react';
import scareAudio from "../sounds/scream.mp3";

export default function LevelTwo({ Level, setLevel}) {

    const [solved, setSolved] = useState(false);
    const [rows, setRows] = useState(Math.floor(Math.random() * 4) + 2);
    const [columns, setColumns] = useState(Math.floor(Math.random() * 4) + 2);
    const [scared, setScared] = useState(false);
    const audio = new Audio(scareAudio);

    const [scare, setScare] = useState(false);

    // pllay sound when scare is true
    function playSound(){
        audio.play()
        // after the sound is done playing, set scare to false
        audio.onended = () => {
            setScare(false)
            setScared(true)
        }
    }
        

    return (
        <div className="LevelTwo">
            <h2>Second Floor</h2>
            <p>As the adventurers progress deeper into the lost city, they stumble upon an eerily quiet chamber known as the Haunted Puzzle Room. Legend has it that this room is haunted by the spirits of ancient guardians who protect the city's most sacred secrets. Within the room lies a jigsaw puzzle, its pieces scattered across the digital floor. Only those with the courage to face the haunted puzzles will unlock the knowledge needed to continue their quest. The straight forward way sometimes is not the solution</p>
            {/* <pre>As the adventurers progress deeper into the lost city, they stumble upon an eerily quiet chamber known as the Haunted Puzzle Room. Legend has it that this room is haunted by the spirits of ancient guardians who protect the city's most sacred secrets. Within the room lies a jigsaw puzzle, its pieces scattered across the digital floor. Only those with the courage to face the haunted puzzles will unlock the knowledge needed to continue their quest.</pre> */}
            <div className="jigsaw">
            <JigsawPuzzle
                imageSrc={img}
                rows={rows}
                columns={columns}
                onSolved={
                () => 
                {
                    setScare(true)
                    playSound()    
                }}
                />
            </div>
            <div className="solveTwo" onClick={() => setSolved(true)}></div>
            {solved && <button onClick={() => setLevel(3)}>Next Level</button>}
            {scared && <p>Boo! Trololo</p>}
            {scare && <div className="scare"><img src={scareImg}/></div>}
        </div>
    )
}