import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#2b75bc',
    textAlign: 'center',
    color: 'white'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        Clayton G. Ousley - Plus-Equals.net
      </footer>
    );
  }
}
