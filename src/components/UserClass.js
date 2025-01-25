//class based component
// a class based componenet is a class that extends React.component and has a render method which returna piece of Jsx
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state={
        userInfo:{
            name:"Dummy",
            location:"Default",
        },
    }

    console.log("child contrcutor");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/Arbenz-007");
    const json = await data.json();

    this.setState({
        userInfo: json,
    });
    
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("component will unmount"); 
  }

  render() {
    console.log("render");
    const {name,location,avatar_url} =this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact @rayan2</h4>
      </div>
    );
  }
}

export default UserClass;

/*
 -contructor(dumm)

 -render(dummy)
    <HTML dummy>

-ComponentDidMount
    <API call>
    <this.setState>->state variablr is update

----Update---

    render(Api data)
    <HTML (new API data)>

-componentDidUpdate

*/
