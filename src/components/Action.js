import React from 'react'

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

export default Action;