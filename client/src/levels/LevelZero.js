import React, { useState } from "react";

export default function LevelOne({ Level, setLevel}) {

  return (
    <div className="LevelZero">
        <h1>Welcome</h1>
        <p>Before the adventurers set foot in the physical realm of the lost city, they encounter a mysterious digital parchment hidden deep within the archives of the internet. This virtual relic, known as the "Digital Parchment," acts as a precursor to the journey that lies ahead. On this ancient digital artifact, the adventurers discover the initial whispers of the lost city's tale and a cryptic invitation to unlock the gateway.</p>    
        <button onClick={() => setLevel(1)}>Advance</button>
    </div>
  );
}