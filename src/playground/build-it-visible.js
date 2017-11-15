let visibility = false;

const toggleVisiblity = () => {
    visibility = !visibility;
    renderApp();
};


const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisiblity}>
                {visibility ? 'Hide details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey, these are some details you can now see!</p>
                </div>
            )}

        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderApp()


