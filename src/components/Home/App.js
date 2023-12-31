import { useState } from 'react';
import data from '../../Data/Exercise.js';
import List from '../../List.js';
import "./Home.scss";
import MenuBar from "../MenuBar/MenuBar.js";

function App() {
  const [exercises, setExercises] = useState(data);
  
  return (
    <main>

      <div className="leftMenuForBigScreen">
        <MenuBar></MenuBar>
      </div>


      <section className='container'>
        <h3>{exercises.length} exercises today</h3>
        <List exercises={exercises} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setExercises([])}
        >
          clear all
        </button>
      </section>

      <div id="bottomMenuForSmallScreen">
        <div id="spacer"></div>
        <MenuBar></MenuBar>
      </div>

      
    </main>
  );
}

export default App;
