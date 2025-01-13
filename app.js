import React from "react";
import * as ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

//React.createElement =>React element--object=>becomes HTML element after we render it

//JSX -- is not HTML in JS its diff
//    -- it looks like HTML or XML syntax
//    -- JSX is a syntax extension for JavaScript not a valid pure JS
//JSX(transpiled before it reaches the JS )--and Transpiling is done by Parcel -- and parcel gives this task to package -Babel.
//behind the scenes JSX code => React.createElement=>Reactelement- JS object=> HTML(render)

const heading = (
  <h1 className="head" tabIndex="1">
    Learning React using JSX
  </h1>
);

//React component
//class based components----OLD
//function based components-NEW

//React functional Component--> a JS func which return a some JSX

// const HeadingComponent = () => {
//   return <h1>Learning React Component</h1>;
// };

// const HeadingComponent2 = () => <h1>Learning React Component</h1>;

const HeadingComponent3 = () => (
  <div id="container">
    <h1 className="heading">Learning React Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);//this is how we render a react element

root.render(<HeadingComponent3/>);//this is how we render a REACT COMPONENT
