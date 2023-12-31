
const parentComponent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am child"),
            React.createElement("h2", {}, "I am child-2")
        ]),
        React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am child"),
            React.createElement("h2", {}, "I am child-2")
        ])
    ]
);
console.log("====>", parentComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentComponent);