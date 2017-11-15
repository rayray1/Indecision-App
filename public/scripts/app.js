'use strict';

console.log('App.js is running');

//  JSX - Javascript XML

// app object
var app = {
    title: 'Indecision App',
    gsubtitle: 'Get busy Living!!',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        'Subtitle: ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// user object
// const user = {
//     name: 'Raymond',
//     age: 27,
//     location: 'London'
// };

// if function for location
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// }

// ternary operator/logical && operator/if stmnt
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );


var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};

var minusOne = function minusOne() {
    console.log('MinusOne');
};

var reset = function reset() {
    console.log('Reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count:',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
