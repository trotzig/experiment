import React from 'react';
import Waypoint from 'react-waypoint';

const { PropTypes } = React;

class AppearSound extends React.Component {
  _play() {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      this._audio.currentTime = 0;
      this._audio.volume = 1;
      this._audio.play();
    }, this.props.timeout);
  }

  _stop() {
    clearTimeout(this._timeout);
    this._fadeOut();
  }

  _fadeOut() {
    const nextVolume = this._audio.volume - 0.01;
    if (nextVolume <= 0) {
      this._audio.pause();
      return;
    }
    this._audio.volume = nextVolume;
    this._timeout = setTimeout(this._fadeOut.bind(this), 20);
  }

  render() {
    return (
      <div>
        <audio ref={(audio) => this._audio = audio}>
          <source src={this.props.src}/>
        </audio>
        <Waypoint
          onEnter={this._play.bind(this)}
          onLeave={this._stop.bind(this)}
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
