import React from "react";
import * as ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const Title = () => (
  <h1 className="head" tabIndex="1">
    Learning React using JSX
  </h1>
);

const ele2=<span>React Element</span>;

const ele = (
  <h1 className="head" tabIndex="5">
    {ele2}
    Putting element inside a component
  </h1>
);



const number=10000;

//componmen Composition -- a component within a component
// inside a component within a {} we can execute any javascript line
const HeadingComponent3 = () => (
  <div id="container">
    {Title()}
    <Title></Title>
    <Title />
    {ele} 
    <h1 className="heading">Learning React Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent3 />); //this is how we render a REACT COMPONENT
