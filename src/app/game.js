import React, {Component} from 'react';
import {Score} from './score';
import {Choices} from './choices';
import choices from '../app/data/choices.json';
import {Modal} from './modal';

const styles = {
  score: {
    textAlign: 'center',
    backgroundColor: 'grey',
    padding: '1px 0px 25px 0px'
  },
  choices: {
    textAlign: 'center',
    backgroundColor: '#6f6f8f',
    padding: '1px 0px 25px 0px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: {
        win: 0,
        lose: 0,
        tie: 0
      },
      choices: choices,
      messages: {
        yourChoice: '',
        enemyChoice: '',
        outcome: ''
      },
      drawTime: true,
      isOpen: false
    };
    this.scoreHandler = this.scoreHandler.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onHandleAgain = this.onHandleAgain.bind(this);
    this.onHandleClear = this.onHandleClear.bind(this);
  }
  scoreHandler(score) {
    this.setState(score: score);
  }
  onHandleClick(choice) {
    if (!this.state.drawTime) {
      return;
    }
    const pick = this.state.choices[Math.floor(Math.random() * (3 - 0))];
    const messages = Object.assign({}, this.state.messages, {
      yourChoice: choice.name,
      enemyChoice: pick.name,
      outcome: choice.rivals[pick.name]
    });
    const score = Object.assign({}, this.state.score);
    const o = messages.outcome;
    score[o.split(' ')[o.split(' ').length - 1]]++;
    this.scoreHandler(score);
    this.setState({
      messages: messages,
      drawTime: !this.state.drawTime,
      score: score,
      isOpen: true
    });
  }
  onHandleAgain() {
    this.setState({
      drawTime: !this.state.drawTime,
      isOpen: false
    });
  }
  onHandleClear() {
    this.setState({
      score: {win: 0, lose: 0, tie: 0},
      isOpen: false
    });
    this.onHandleAgain();
  }
  render() {
    const isDraw = this.state.drawTime;
    return (
      <div>
        <div style={styles.score}>
          <h1>Score:</h1>
          <Score
            score={this.state.score}
            />
        </div>
        <div style={styles.choices}>
          <h1>Choose:</h1>
          <Choices
            choices={this.state.choices}
            handleClick={this.onHandleClick}
            />
        </div>
        <Modal
          show={this.state.isOpen}
          messages={this.state.messages}
          drawTime={isDraw}
          handleAgain={this.onHandleAgain}
          handleClear={this.onHandleClear}
          score={this.state.score}
          />
      </div>
    );
  }
}
