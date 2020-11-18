import React from 'react';

const ActionButton = (props) => {
    return (
        <button 
            className="action-btn"
            disabled={props.status}
            >
            {props.text}
        </button>
    )
}

export default ActionButton;