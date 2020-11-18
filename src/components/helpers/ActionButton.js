import React from 'react';

const ActionButton = (props) => {
  return (
    <button
      className="action-btn"
      disabled={props.status}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default ActionButton;
