const heading = React.createElement("h1",    //heading:its an js object of type h1
    { id: "heading", xyz: "abc" },
    "Hello world from react insisde it");
console.log(heading);//object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);//responsible for converting object to h1 tag and putting it in root
/*
<div id="parent">
    <div id="child">
        <h1>I,m h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I,m h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

ReactElement(object)->HTML(Browser Understands)
*/

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")//array of children for creating siblings
        ]),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")//array of children for creating siblings
        ])
]);

console.log(parent);
root.render(parent);

//JSX  