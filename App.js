// const heading = React.createElement(
//     "h1", 
//     {id: "heading", xyz : "abc"}, "Hello World from React"
// );

// console.log(heading); // React element - object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // passing react element

// --------------------------------------------------------------

// How do you create this type of structure using React
/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
    </div>
</div> */

// How do we create nested element

// const parent = React.createElement(
//     "div", 
//     {id: "parent"}, 
//     React.createElement(
//         "div", 
//         {id: "child"},
//          React.createElement(
//             "h1", {}, "I am h1 tag")
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
// ---------------------------------------------------------------------

// suppose if we have to create sibling - then you have to convert third argument as an array
/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1> // Now these two are sibling
        <h2>I am h2 tag</h2>
    </div>
</div> */

// const parent = React.createElement(
//     "div", 
//     {id: "parent"}, 
//     React.createElement(
//         "div", 
//         {id: "child"},
//          // Array of children
//          [React.createElement(
//             "h1", {}, "I am h1 tag"),React.createElement(
//                 "h1", {}, "I am h1 tag")]
//     )
// ); 

// ----------------------------------------------------------------------

// Suppose if we have to create something like this

{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1> 
        <h2>I am h2 tag</h2>
    </div>
</div id="child2">
       <h1>I am h1 tag</h1> 
       <h2>I am h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// there is something known as JSX - will make our life easy

