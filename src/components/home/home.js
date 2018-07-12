import './style.css';
import Exercise from '../exercise/exercise'


import React from 'react';

const Home = (props) => {

      return (
        <main className="home">

<Exercise setView={props.setView} exercises={props.exercises} />
  </main>

)

}


export default Exercise;
