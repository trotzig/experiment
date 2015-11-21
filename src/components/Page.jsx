import React from 'react';

const styles = require('styles/Page.scss');

class Page extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        {this.props.children}
      </div>
    );
  }
}

Page.displayName = 'Page';

export default Page;
