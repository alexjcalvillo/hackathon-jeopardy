import React from 'react';

const ActionButton = (props) => {
    return (
        <button className="border rounded w-full text-3xl text-white py-2 my-4 hover:bg-white hover:text-gray-900 focus:outline-none">
            {props.text}
        </button>
    )
}

export default ActionButton;