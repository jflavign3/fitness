import { useState } from 'react';
import data from './Data/Exercise';
import List from './List';

function App() {
  const [exercises, setExercises] = useState(data);
  
  return (
    <main>
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
    </main>
  );
}

export default App;
