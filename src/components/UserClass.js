//class based component
// a class based componenet is a class that extends React.component and has a render method which returna piece of Jsx
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name+"child contrcutor");
  }

  componentDidMount() {
    console.log(this.props.name+ "Child Component Did Mount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log(this.props.name+"child render)");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            //never update state variable directly
            this.setState({
              count: count + 1,
              count2: count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count2 : {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact @rayan2</h4>
      </div>
    );
  }
}

export default UserClass;
