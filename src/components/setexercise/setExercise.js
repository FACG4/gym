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
let result =  this.props.state[this.props.view-1].weight / ( 1.0278 - 0.0278 * this.props.state[this.props.view-1].reps );
this.props.result(this.props.view-1, result);
}

render() {
return (
<div>
        <div className="input--container" >
        <form className="input--style" onSubmit={this.onSubmit}>
        <label className="label--style">
      {this.props.state[this.props.view-1].title}
        </label>
        <br></br>
          <label>Sets:</label>
            <input type="number" name="sets" />

          <label>Reps: </label>

            <input type="number" name="reps" />

          <label> Weight: </label>
            <input type="number" name="weight" />

          <input  type="submit" value="Submit" className="btn--style" />
        </form>
<div className="result-style" >Point:  {this.props.state[this.props.view-1].weight / ( 1.0278 - 0.0278 * this.props.state[this.props.view-1].reps )}
</div>
</div>
<Graph  exercise={this.props.state[this.props.view-1]}/>
        </div>
)
};
}
