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
    this.result = this.result.bind(this);

    this.state = {
      view:0,
      exercises: [
        {
          title: "Pull Ups",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0,
          data:[30,50]
        },
        {
          title: "Bench Press",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0,
          data:[30,20]
        },
        {
          title: "Dead Left",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0,
          data:[10,20]
        }
      ]
    }

  }
  result(element, value) {
    this.setState(() => (this.state.exercises[element]={
    ...this.state.exercises[element],
data:this.state.exercises[element].data.concat(value)
    } ));

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

    console.table("data",this.state.exercises[0].data);

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
<Header setView={this.setView} title={title} subtitle={subtitle} />
<SetExercise result={this.result} state={this.state.exercises} view={this.state.view} analytics={this.analytics} />
</div>
)

      }
  }
}
