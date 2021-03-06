import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Home from './home/home';
import SetExercise from './setexercise/setExercise';
import AddExercise from './addExercise/AddExercise'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.analytics = this.analytics.bind(this);
    this.result = this.result.bind(this);
    this.addExercise = this.addExercise.bind(this);

    this.state = {
      view:0,
      exercises: [
        {
          title: "Pull Ups",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0,
          data:[]
        },
        {
          title: "Bench Press",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0,
          data:[]
        },
        {
          title: "Dead Left",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',

          set: 0,
          reps: 0,
          weight: 0,
          data:[]
        },
        {
          title: "Seated Leg Press",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',

          set: 0,
          reps: 0,
          weight: 0,
          data:[]
        },
        {
          title: "Lat Pull-Down",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',

          set: 0,
          reps: 0,
          weight: 0,
          data:[]
        }
        ,
        {
          title: "Triceps Pushdown",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',

          set: 0,
          reps: 0,
          weight: 0,
          data:[]
        },
        {
          title: "Hanging Leg Raise",
          img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
          set: 0,
          reps: 0,
          weight: 0,
          data:[]
        }
      ],
    }

  }
  result(element, value) {
    this.setState(() => (this.state.exercises[element]={
    ...this.state.exercises[element],
data:this.state.exercises[element].data.concat(value)
    } ));

}
  addExercise(name) {
    this.setState(() => (this.state.exercises.unshift({title: name,
    img: 'https://imge.downloadapk.net/e/75/01f92c_150.png',
    set: 0,
    reps: 0,
    weight: 0,
    data:[]
    })
     ))};


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
console.log(this.state.exercises);
    let title = 'Gymentic Fitness App';
    let subtitle = 'Welcome Aisha';

    switch (this.state.view){
        case 0:
        return (
  <div>
<Header title={title} subtitle={subtitle} />
<AddExercise addExercise={this.addExercise} />
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
