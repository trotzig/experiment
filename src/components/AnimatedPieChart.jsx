import React from 'react';
import PieChart from 'react-simple-pie-chart';

const { PropTypes } = React;

class AnimatedPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this._speed = 0.5;
  }

  componentDidMount() {
    requestAnimationFrame(() => this.update());
  }

  update() {
    const newValue = this.state.value + this._speed;
    if (this._speed > 0 && newValue > 70) {
      this._speed = -0.5;
    } else if (this._speed < 0 && newValue < 25) {
      this._speed = 0.5;
    }

    this.setState({
      value: this.state.value + this._speed,
    });

    requestAnimationFrame(() => this.update());
  }

  render() {
    return (
      <PieChart slices={[
        {
          color: '#6EAE90',
          value: this.state.value,
        },
        {
          color: '#AB6EAE',
          value: 100 - this.state.value,
        },
      ]} />
    );
  }
}

AnimatedPieChart.displayName = 'AnimatedPieChart';

AnimatedPieChart.propTypes = {
  src: PropTypes.string,
};

export default AnimatedPieChart;
