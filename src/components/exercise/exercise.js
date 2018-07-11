import React from 'react';

const Exercise = (props) => {
  return (
    <div className="container">

    {
    props.exercises.map((exercise)=>{

    const exerciseIndex = props.exercises.indexOf(exercise);
    if(exerciseIndex%2 === 0)
    return <div onClick={()=>props.setView(exerciseIndex+1)}   key={exerciseIndex} className="exercise">
    <div>
    {exercise.title}</div >
    <div>
    <img className="exerciseImg" src={exercise.img}></img>
    </div>
    </div>
    return <div onClick={()=>props.setView(exerciseIndex+1)}   key={exerciseIndex} className="exerciseOdd">
    <div>
    {exercise.title}
    </div >
    <div>
    <img className="exerciseImg" src={exercise.img}></img>
    </div>
    </div>

    }
    )
    }
        </div>
  );
};

export default Exercise;
