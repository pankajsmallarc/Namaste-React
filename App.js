import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const jsx = <h1 className="heading">Hello React</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsx);
