import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'


// Indecision component
export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }
    // class properties syntax(Event Handlers)
    // handle delete method - deletes all options - wipes the array
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    // handleDeleteOption method deletes one option
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    // handlepick method - chooses a random option
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option);
    }

    // handleaddoption method - adds an option
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }

    // Lifecycle methods
    componentDidMount()  {
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
