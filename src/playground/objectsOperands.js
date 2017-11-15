// user object
const user = {
    name: 'Raymond',
    age: 27,
    location: 'London'
};

// if function for location
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

// ternary operator/logical && operator/if stmnt
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);