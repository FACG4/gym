import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Home from './home/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.setView = this.setView.bind(this);
    this.state = {
      view:0,
      exercises: [
        {
          title: "Pull Ups",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png'

        },
        {
          title: "Bench Press",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png'
        },
        {
          title: "Dead Left",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png'
        }
      ]
    }

  }
//   setView() {
// this.setState(() => ({ view: 1 }));
// }
  render() {
    let title = 'Gymentic Fitness App';
    let subtitle = 'Welcome Aisha';
    console.log(this.state.view);

    switch (this.state.view){
        case 0:
        return (
  <div>
          <Header title={title} subtitle={subtitle} />
          <Home
  title={this.state.exercises.map((exercise)=>{
    const exerciseIndex = this.state.exercises.indexOf(exercise);
    if(exerciseIndex%2 === 0)
    return <div key={exerciseIndex} className="exercise"><div>{exercise.title}</div ><div><img className="exerciseImg" src={exercise.img}></img></div></div>
    return <div key={exerciseIndex} className="exerciseOdd"><div>{exercise.title}</div ><div><img className="exerciseImg" src={exercise.img}></img></div></div>

  })}
           />
  </div>
  )
        case 1:
        title = "hi";
        return (
  <div>
          <Header title={title} subtitle={subtitle} />
          <Home
  title={this.state.exercises.map((exercise)=>{
    const exerciseIndex = this.state.exercises.indexOf(exercise);
    if(exerciseIndex%2 === 0)
    return <div key={exerciseIndex} className="exercise"><div>{exercise.title}</div ><div><img className="exerciseImg" src={exercise.img}></img></div></div>
    return <div key={exerciseIndex} className="exerciseOdd"><div>{exercise.title}</div ><div><img className="exerciseImg" src={exercise.img}></img></div></div>

  })}
           />
  </div>
  )

      }
  }
}
