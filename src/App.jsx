import './App.css';
import { useState } from 'react'
import Keypad from './components/Keypad';

function App() {
  const [display, setDisplay] = useState(0)
  return (
    <div className="App">

      <div className='calc-main-container'>
        <div className='display'><h1>{display}</h1></div>
        <Keypad display={display} setDisplay={setDisplay} />
      </div>

    </div>
  );
}

export default App;
