console.log('App.js is running');

//  JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
    "h2",
    { id: "someid" },
    "Something else"
);
var appRoot = document.getElementById('app');

ReactDom.render(template, appRoot);