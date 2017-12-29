import React from 'react'

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

export default Header;