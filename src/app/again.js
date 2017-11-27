import React from 'react';

export function Again(props) {
  return (
    <button onClick={props.onClick}>
      Play Again?
    </button>
  );
}
Again.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
