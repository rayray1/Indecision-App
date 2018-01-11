import React from 'react';

// AddOption component
export default class AddOption extends React.Component {
    // class property - to set up default state values
    state = {
        error: undefined
    }
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    // class property - to set up event handlers
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option) // passed from parent

        this.setState(() => ({ error }))

        // if no error, clear input
        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type='text' name='option' />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}