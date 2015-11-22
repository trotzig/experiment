import React from 'react';

class Grow extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.forceUpdate();
    })
  }

  render() {
    const numOfChars = this.props.length || this.props.children.length;
    const charactersToFit = Math.max(numOfChars, 7);
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
