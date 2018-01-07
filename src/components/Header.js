import React from 'react'

// Stateless Header component Implicitly returning jsx
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
)

// default prop header
Header.defaultProps = {
    title: 'Indecision App'
}

export default Header;