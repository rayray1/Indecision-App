import React from 'react'

// Stateless Option component - Implicitly returning jsx(not using return keyword)
const Option = (props) => (
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

export default Option;