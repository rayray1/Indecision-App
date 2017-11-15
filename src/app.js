console.log('App.js is running');

//  JSX - Javascript XML

// app object
const app = {
    title: 'Indecision App',
    gsubtitle: 'Get busy Living!!',
    options: ['One', 'Two']
}


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>


        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
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


let count = 0;
const addOne = () => {
    console.log('addOne');
};

const minusOne = () => {
    console.log('MinusOne');
}

const reset = () => {
    console.log('Reset');
}

const templateTwo = (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);



const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);