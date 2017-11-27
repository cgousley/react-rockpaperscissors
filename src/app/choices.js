import React, {Component} from 'react';
import {Choice} from './choice';

const styles = {
  choiceContainer: {
    display: 'flex',
    maxWidth: '500px',
    width: '80%',
    justifyContent: 'space-evenly'
  }
};
export class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: this.props.choices
    };
  }
  renderChoice(choice, i) {
    return (
      <Choice
        key={i}
        name={choice.name}
        rivals={choice.rivals}
        symbol={choice.symbol}
        /* eslint-disable */
        onClick={() => this.props.handleClick(choice)}
        /* eslint-enable */
        />
    );
  }

  render() {
    const buttons = this.state.choices.map((choice, i) => {
      return this.renderChoice(choice, i);
    });

    return <div style={styles.choiceContainer}>{buttons}</div>;
  }
}

Choices.propTypes = {
  choices: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.func.isRequired
};
