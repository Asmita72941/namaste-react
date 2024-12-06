import React from "react";
import ReactDOM from 'react-dom/client';

const fn1 = () => true; // This means that the function is returning true.

const fn2 = () => {
    return true;
}
// Both functions are same . both are returning true.

// -----------------------------------------------------

// React Functional Component
const HeadingComponent1 = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>;
};

const HeadingComponent2 = () => <h1 className="heading" >Namaste React Functional Component</h1>;

// These component are same

// -----------------------------------

// JSX can be nested also
const HeadingComponent3 = () => (
    <div id="container">
        <h1 className="heading" >Namaste React Functional Component</h1>
    </div>
);

// Suppose i want to render my heading component 

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent3/>);

// --------------------------------------------------

// Suppose we have two component and if i want to render my title component inside my heading component ?

const Title = () => (
    <h1>Namaste React using jsx</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading" >Namaste React Functional Component</h1>
    </div>
);
// This is component composition - put a component inside component/ composing two components into one another

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);

// ----------------------------------------------

// we can also use normal function
// Perfectly valid react component

const Title1 = function () {
    return (
    <h1>Namaste React using jsx</h1>
    );
};

// ------------------------------
// if we write curly brackets anywhere inside jsx . Inside this curly brackets you can run any piece of js expression. you any write any js code inside this culy brackets.

const number = 1000;

const HeadingComponent4 = () => (
    <div id="container">
        <h2>{number}</h2>
        <h2>{console.log("yghygyhg")}</h2>
        <h1 className="heading" >Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent4/>);


// ---------------------------------------
// If i have to put an react element inside a component
// Titl3 is a normal js variable

const Title3 = (
    <h1>Namaste React using jsx</h1>
);

const HeadingComponent5 = () => (
    <div id="container">
        {title3}
        <h1 className="heading" >Namaste React Functional Component</h1>
    </div>
);

// ----------------------------------------------

// How do you put react element inside react element

const elem = <span>React Element</span>

const Title4 = (
    <h1 className="head">
    {elem}
    Namaste React using jsx
    </h1>
);

// -------------------------
// what if api sends some malicious data 
// Suppose an attacker wants to get an access to run some js in your browser . what can we do?  
// This type of attack is known as cross site scripting .

// but jsx takes care of this injection attack. Suppose even if this api passes some malicious data into your code jsx will escape it . Whenever any data is wrapped inside the curly brackets the browser/jsx won't blindly run it. it will sanitize your data whatever is coming and then passing. it prevents cross site scripting .
const data = api.getData();

const HeadingComponent6 = () => (
    <div id="container">
        {data}
        <h1 className="heading" >Namaste React Functional Component</h1>
    </div>
);
// ------------------------------------------------

// Suppose this title has a component . Suppose i want to render title in head.....

const Title5 = () => (
    <h1>Namaste React using jsx</h1>
);

const HeadingComponent7 = () => (
    <div id="container">
        <Title5/>
        <h1 className="heading" >Namaste React Functional Component</h1>
    </div>
);

// There is one more way to do it


const HeadingComponent8 = () => (
    <div id="container">
        <Title5></Title5>
        <h1 className="heading" >Namaste React Functional Component</h1>
    </div>
);

// You can write title any no. of times

// one more way 
// Title5 is a functional component . FC is a normal js function at the end of the day.

const HeadingComponent9 = () => (
    <div id="container">
        {Title5()}
        <h1 className="heading" >Namaste React Functional Component</h1>
    </div>
);

// These three things are one and the same thing.

