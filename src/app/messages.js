import React from 'react';
const styles = {
  message: {
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
export function Messages(props) {
  const messages = props.messages;
  return (
    <div>
      <div style={styles.message}>You Chose:{' ' + messages.yourChoice}</div>
      <div style={styles.message}>
        Your Enemy Chose:{' ' + messages.enemyChoice}
      </div>
      <div style={styles.message}>{messages.outcome}</div>
    </div>
  );
}
Messages.propTypes = {
  messages: React.PropTypes.object.isRequired
};
