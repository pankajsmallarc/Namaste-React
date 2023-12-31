import React from 'react';
import ReactDOM  from 'react-dom/client';
const parentComponent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am child react"),
            React.createElement("h2", {}, "I am child-2 React333rrr")
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