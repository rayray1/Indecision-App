//STATELESS FUNCTIONAL COMPONENTS - cannot use state
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}


//Class Based Header component
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}


// Class Based Action component
class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}

                >
                What should i do?
                </button>
            </div>
        )
    }
}


//Class Based Options component
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

// Class Based Option component
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}


// Conversion from explicitly using return to implicitly returning an object
handleDeleteOptions() {
    this.setState(() => {
        return {
            options: []
        }
    })
}

handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
}


//  INTEGERS
const num = '12'
parseInt(num, 10)

isNaN('a' + 3) // Evaluates to true

isNaN(2 + 3) // Evaluates to false



import validator from 'validator'
console.log(validator.isEmail('test@gmail.com'))




import './utils.js'
import isSenior, { isAdult, canDrink } from './person.js'
import subtract, { square, add } from './utils.js'

console.log(square(4))
console.log(add(50, 50))
console.log(subtract(100, 50))

console.log(isAdult(20))
console.log(canDrink(14))
console.log((isSenior(25)))