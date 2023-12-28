import './App.css';
import React, { useState } from 'react';
import LevelZero from './levels/LevelZero';
import LevelOne from './levels/LevelOne';
import LevelTwo from './levels/LevelTwo';
import LevelThree from './levels/LevelThree';
import LevelFour from './levels/LevelFour';
import LevelFive from './levels/LevelFive';
import LevelSix from './levels/LevelSix';

function App() {
  const [Level, setLevel] = useState(0);

  return (
    <div className="App">
        <h1>The Gateway to the Lost City</h1>
        {Level === 0 && <LevelZero Level={Level} setLevel={setLevel} />}
        {Level === 1 && <LevelOne Level={Level} setLevel={setLevel} />}
        {Level === 2 && <LevelTwo Level={Level} setLevel={setLevel} />}
        {Level === 3 && <LevelThree Level={Level} setLevel={setLevel} />}
        {Level === 4 && <LevelFour Level={Level} setLevel={setLevel} />}
        {Level === 5 && <LevelFive Level={Level} setLevel={setLevel} />}
        {Level === 6 && <LevelSix Level={Level} setLevel={setLevel} />}

    </div>
  );
}

export default App;
