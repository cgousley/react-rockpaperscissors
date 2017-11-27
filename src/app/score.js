import React from 'react';

const styles = {
  scoreContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
  score: {
    background: '#fff',
    border: '1px solid #999',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '24px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: '10px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
export function Score(props) {
  const scores = props.score;
  return (
    <div style={styles.scoreContainer}>
      <span style={styles.score}>Win: {scores.win}</span>
      <span style={styles.score}>Lose: {scores.lose}</span>
      <span style={styles.score}>Tie: {scores.tie}</span>
    </div>
  );
}

Score.propTypes = {
  score: React.PropTypes.object.isRequired
};
