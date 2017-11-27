import React, {Component} from 'react';
import {Messages} from './messages';
import {Again} from './again';
import {Clear} from './clear';
import {Score} from './score';
const styles = {
  continueContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly'
  }
};
export class Modal extends Component {
  render() {
    // Render nothing if the 'show' prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal 'window'
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: '5',
      minWidth: '225',
      minHeight: '300',
      margin: '0 auto',
      padding: '30',
      maxWidth: '500px'
    };

    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <Messages messages={this.props.messages} drawTime={this.props.drawTime}/>
          <Score
            score={this.props.score}
            />
          <div style={styles.continueContainer}>
            <Again onClick={this.props.handleAgain}/>
            <Clear onClick={this.props.handleClear}/>
          </div>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  messages: React.PropTypes.object.isRequired,
  drawTime: React.PropTypes.bool.isRequired,
  score: React.PropTypes.object.isRequired,
  handleAgain: React.PropTypes.func.isRequired,
  handleClear: React.PropTypes.func.isRequired
};
