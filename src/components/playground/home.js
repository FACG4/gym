import './style.css';

import React from 'react';
// import SetExercise from './setexercise/setExercise';
export default class Home extends React.Component {
  constructor(props) {

    super(props);
    this.analytics = this.analytics.bind(this);
    this.state = {

      exercises: [
        {
          title: "Pull Ups",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0
        },
        {
          title: "Bench Press",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0
        },
        {
          title: "Dead Left",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0
        }
      ]
    };
  }
  analytics() {
  this.setState(() => ({ set: 2 }));
  console.log(this.state.exercises);

  }
  render() {

      return (
        <main className="home">
    <div className="container">
    {this.props.title}
    {this.props.img}
{
this.state.exercises.map((exercise)=>{
  const exerciseIndex = this.state.exercises.indexOf(exercise);
  if(exerciseIndex%2 === 0)
  return <div onClick={()=>this.props.setView(exerciseIndex+1)}  key={exerciseIndex} className="exercise"><div>{exercise.title}</div ><div><img className="exerciseImg" src={exercise.img}></img></div></div>
  return <div  onClick={()=>this.props.setView(exerciseIndex+1)}  key={exerciseIndex} className="exerciseOdd"><div>{exercise.title}</div ><div><img className="exerciseImg" src={exercise.img}></img></div></div>

}
)
  }
  </div>
  </main>
)};
}
