import React from 'react';

const ActionButton = (props) => {
  return (
    <button
      className={`action-btn ${props.status ? 'cursor-not-allowed' : null} `}
      disabled={props.status}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default ActionButton;
