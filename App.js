import React from "react";
import ReactDOM from 'react-dom/client';

// React.createElement => ReactElement - JS Object => HTMLElement(render)

// This is how we create react element using react

// const heading = React.createElement("div", {id:"heading"}, "Namaste React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// -----------------------------------------------------------------

// This is how we create react element using JSX

// this is not html this is jsx
// JSX (transpiled before it reaches the JS engine)

// const jsxHeading = <h1 id="heading" >Namaste React using JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// ------------------------------------------------------------------------

// Suppose if i have to write this in multiple lines - you have to wrap it inside round brackets

const jsxHeading = (<h1 id="heading" >
    Namaste React using JSX
    </h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

