import React from 'react';
import Waypoint from 'react-waypoint';

const { PropTypes } = React;

class AppearSound extends React.Component {
  _play() {
    this._timeout = setTimeout(() => {
      this._audio.play()
    }, this.props.timeout);
  }

  _pause() {
    clearTimeout(this._timeout);
    this._audio.pause();
  }

  render() {
    return (
      <div>
        <audio ref={(audio) => this._audio = audio}>
          <source src={this.props.src}/>
        </audio>
        <Waypoint
          onEnter={this._play.bind(this)}
          onLeave={this._pause.bind(this)}
        />
      </div>
    );
  }
}

AppearSound.displayName = 'AppearSound';

AppearSound.propTypes = {
  src: PropTypes.string,
};

export default AppearSound;
