console.log('App.js is running');

//  JSX - Javascript XML

// app object
const app = {
    title: 'Indecision App',
    subtitle: 'Get busy Living!!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFormApp()
    }
};

// create 'Remove all button'
// onclick wipe array -> rerender

const removeAll = () => {
    app.options = [];
    renderFormApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
};

const appRoot = document.getElementById('app');


const renderFormApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>

        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderFormApp()


