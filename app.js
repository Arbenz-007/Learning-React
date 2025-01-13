import React  from "react";
import * as ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag 👌")//array of children for creating siblings
        ]),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i'm a h1 tag 👍"),
        React.createElement("h2", {}, "I'm a h2 tag")//array of children for creating siblings
        ])
]);

console.log(parent);
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

//JSX  