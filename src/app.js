console.log('App.js is running');

//  JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is a new line</p>
        <ol>
            <li>list one</li>
            <li>list two</li>
        </ol>
    </div>
);


var templateTwo = (
    <div>
        <h1>Raymond Rupiah</h1>
        <p>Age : 29</p>
        <p>Location: London</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);