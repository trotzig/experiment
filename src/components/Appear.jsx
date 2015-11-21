import React from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames';

const { PropTypes } = React;

const styles = require('styles/Appear.scss');

class Appear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appeared: false,
    };
  }

  _startAppearing() {
    setTimeout(() => {
      this.setState({
        appeared: true,
      });
    }, this.props.timeout);
  }

  render() {
    const classes = classNames(styles.component, {
      [styles.appeared]: this.state.appeared,
      [styles.grow]: this.props.grow,
    });

    return (
      <div className={classes}>
        <div>
          <Waypoint
            onEnter={(_, from) => {
              setTimeout(() => {
                this.setState({
                  appeared: true,
                });
              }, from !== 'above' && this.props.timeout);
            }}
            onLeave={() => this.setState({ appeared: false })}
          />
        </div>
        {this.props.children}
      </div>
    );
  }
}

Appear.displayName = 'Appear';

Appear.propTypes = {
  children: PropTypes.node,
  timeout: PropTypes.number,
  grow: PropTypes.bool,
},

Appear.defaultProps = {
  timeout: 500,
  grow: false,
};

export default Appear;
