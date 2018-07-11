import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Home from './home/home';
import SetExercise from './setexercise/setExercise';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.analytics = this.analytics.bind(this);

    this.state = {
      view:0,
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
    }

  }

  setView(page) {
this.setState(() => ({ view: page }));

}
  analytics(element, sets, reps, weight) {
this.setState(() => (this.state.exercises[element]={
...this.state.exercises[element],
  set:sets,
  reps:reps,
  weight: weight
} ));

}

  render() {

    console.table("exer",this.state.exercises);

    let title = 'Gymentic Fitness App';
    let subtitle = 'Welcome Aisha';

    switch (this.state.view){
        case 0:
        return (
  <div>
<Header title={title} subtitle={subtitle} />
<Home exercises={this.state.exercises} setView={this.setView} />
  </div>
)

default:
return (
<div>
<Header title={title} subtitle={subtitle} />
<SetExercise state={this.state.exercises} view={this.state.view} analytics={this.analytics} />
</div>
)

      }
  }
}
