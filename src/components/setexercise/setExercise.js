import './style.css';
import React from 'react';
import Graph from '../graph/graph'

export default class setExercise extends React.Component {
  constructor(props) {
    super(props);
this.onSubmit=this.onSubmit.bind(this);
  }

onSubmit(e){
e.preventDefault();
let sets = e.target.sets.value;
let reps = e.target.reps.value;
let weight = e.target.weight.value;
this.props.analytics(this.props.view-1, sets, reps, weight);
}


  render() {
      return (
        <div>
        <form onSubmit={this.onSubmit}>
        <label>
            Exercise Name: {this.props.state[this.props.view-1].title}
        </label>
        <br></br>
          <label>
            # Sets:
            <input type="text" name="sets" />
          </label>
          <label>
            # Reps:
            <input type="text" name="reps" />
          </label>
          <label>
              Weight:
            <input type="text" name="weight" />
          </label>
          <input  type="submit" value="Submit" />
        </form>

<Graph />
        </div>
)
};
}
