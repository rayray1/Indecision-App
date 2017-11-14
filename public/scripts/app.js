'use strict';

console.log('App.js is running');

//  JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is a new line'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'list one'
        ),
        React.createElement(
            'li',
            null,
            'list two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Raymond Rupiah'
    ),
    React.createElement(
        'p',
        null,
        'Age : 29'
    ),
    React.createElement(
        'p',
        null,
        'Location: London'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
