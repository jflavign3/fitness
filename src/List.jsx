import React from 'react';
import Exercise from './Exercise';

const List = ({ exercises }) => {
 
  return (    
    <section>
      {exercises.map((exercise) => {
        return <Exercise key={exercise.id} {...exercise} />;
      })}
    </section>
  );
};

export default List;
