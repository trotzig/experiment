import React from 'react';

class Grow extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.forceUpdate();
    })
  }

  render() {
    const charactersToFit = Math.max(this.props.children.length, 7);
    const width = window.innerWidth;

    const fontSize = width / (charactersToFit * 0.8);


    return (
      <span style={{ fontSize: fontSize }}>
        {this.props.children}
      </span>
    );
  }
}

Grow.displayName = 'Grow';

export default Grow;
