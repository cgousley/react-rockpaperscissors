import React, {Component} from 'react';
const styles = {
  square: {
    justifyContent: 'space-between',
    border: '1px solid #999',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '0px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: '10px',
    textAlign: 'center'
  }
};
export class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      rivals: props.rivals,
      symbol: props.symbol
    };
  }
  render() {
    return (
      <button style={styles.square} onClick={this.props.onClick}>
        <p>{this.state.symbol}</p>
        <p>{this.state.name}</p>
      </button>
    );
  }
}
Choice.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  rivals: React.PropTypes.object.isRequired,
  symbol: React.PropTypes.string.isRequired
};
