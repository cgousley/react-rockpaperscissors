import React, {Component} from 'react';
import {Title} from './title';
import {Game} from './game';
import {Footer} from './footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    width: '100%',
    minWidth: '400'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minWidth: '400'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <main style={styles.main}>
          <Title/>
          <Game/>
        </main>
        <Footer/>
      </div>
    );
  }
}
