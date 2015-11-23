import React from 'react';
import PieChart from 'react-simple-pie-chart';

const { PropTypes } = React;

class AnimatedPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    requestAnimationFrame(() => this.update());
  }

  update() {
    this.setState({
      value: this.state.value + 1,
    });

    if (this.state.value < 70) {
      requestAnimationFrame(() => this.update());
    }
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
