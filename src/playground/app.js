// Indecision component
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        //bind to current component instance
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }

    // Lifecycle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) { // if options is null
                this.setState(() => ({ options })) // updater function-returns an object
            }
            
        } catch (error) {
            // Do nothing - Fall back to empty array
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        } 
    }
    componentWillUnmount() {
        console.log('Componentwillunmount!')
    }

    // handle delete method - deletes all options - wipes the array
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    // handleDeleteOption method deletes one option
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    // handlepick method - chooses a random option
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option);
    }

    // handleaddoption method - adds an option
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add'
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }))
    }

    render() {
        const subtitle = 'Put you life in the hands of an App'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} // passing the function as a prop
                    
                    />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                <AddOption
                    handleAddOption={this.handleAddOption}
                
                    />
            </div>
        )
    }
}



// Stateless Header component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

// default prop header
Header.defaultProps = {
    title: 'Indecision App'
}


 // Stateless Action component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}

            >
                What should i do?
                </button>
        </div>
    )

}


// Stateless Options component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />

                ))
            }
        </div>
    )

}



// Stateless Option component
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
                >
                remove
            </button>
        </div>
    )

}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
