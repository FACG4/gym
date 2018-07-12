import './style.css';
import React from 'react';

export default class AddExercise extends React.Component {
constructor(props) {
super(props);
this.onSubmit=this.onSubmit.bind(this);
}

onSubmit(e){
e.preventDefault();
if (e.target.Name.value.trim()!=0) {
  let Name = e.target.Name.value;
  this.props.addExercise(Name);
}
}

render() {
return (
<div>
        <form className="input--style" onSubmit={this.onSubmit}>
        <br></br>
          <label>Exercise Name:</label>
            <input type="text" name="Name" required />
          <input  type="submit" value="Add New Exercise" />
        </form>
</div>

)
};
}
