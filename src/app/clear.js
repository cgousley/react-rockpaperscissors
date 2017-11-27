import React from 'react';

export function Clear(props) {
  return (
    <button onClick={props.onClick}>
      Clear Score
    </button>
  );
}
Clear.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
