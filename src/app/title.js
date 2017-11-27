import React, {Component} from 'react';

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#2b75bc',
    color: 'white'
  },
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  },
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  }
};

export class Title extends Component {
  render() {
    return (
      <div style={styles.title}>
        <h1 style={styles.h1}>Rock Paper Scissors</h1>
        <h2 style={styles.h2}>Demo React.js Project</h2>
      </div>
    );
  }
}
