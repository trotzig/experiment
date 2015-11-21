import Appear from 'components/Appear';
import Grow from 'components/Grow';
import React from 'react';
import Page from 'components/Page'

require('normalize.css');
require('styles/App.css');

// let yeomanImage = require('../images/yeoman.png');
class AppComponent extends React.Component {
  componentDidMount() {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode !== 13) {
        return;
      }
      window.scrollBy(0, window.innerHeight);
    });
  }

  render() {
    return (
      <div>
        <Page>
          <Appear><Grow>Joe Lencioni</Grow></Appear>
          <Appear timeout={1000}><Grow>is leaving Brigade</Grow></Appear>
        </Page>
        <Page>
          <Appear>
            <img src='https://c1.staticflickr.com/3/2153/2276838135_a878f374a4.jpg'/>
          </Appear>
        </Page>
        <Page>
          <Appear><Grow>His legacy will live on</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Here are some stats:</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Joe has worked</Grow></Appear>
          <Appear timeout={1000} grow><var><Grow>860</Grow></var></Appear>
          <Appear timeout={1500}><Grow>days at Causes/Brigade</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>He has made over</Grow></Appear>
          <Appear timeout={1000} grow><var><Grow>7100</Grow></var></Appear>
          <Appear timeout={1500}><Grow>commits since day one</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>That's about</Grow></Appear>
          <Appear timeout={1000} grow><var><Grow>8.25</Grow></var></Appear>
          <Appear timeout={1400}><Grow>commits per day</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Only one person</Grow></Appear>
          <Appear timeout={3000} grow>
            <div style={{
              position: 'relative',
              display: 'inline-block',
              marginTop: '3vh'
            }}>
              <img src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/005/08f/316/13ef886.jpg'/>
              <div style={{
                color: '#fff',
                position: 'absolute',
                top: 5,
                right: 5,
                fontWeight: 'bold',
                fontSize: 20
              }}>
                7974
              </div>
            </div>
          </Appear>
          <Appear timeout={1000}><Grow>has made more commits</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Instead of</Grow></Appear>
          <Appear><b><Grow>QWERTY</Grow></b></Appear>
        </Page>
        <Page>
          <Appear><Grow>Joe uses</Grow></Appear>
          <Appear><b><Grow>COLEMAK</Grow></b></Appear>
        </Page>
        <Page>
          <Appear>
            <img style={{ marginBottom: '3vh' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/KB_US-Colemak.svg/500px-KB_US-Colemak.svg.png'/>
          </Appear>
          <Appear timeout={2000}><Grow>(That thing right there ^^ is messed up!)</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>He's always trying to win people over to COLEMAK</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>So far, his conversion rate is</Grow></Appear>
          <Appear timeout={2000} grow><var><Grow>&lt;1%</Grow></var></Appear>
        </Page>
        <Page>
          <Appear><Grow>Joe - keep fighting the fight!</Grow></Appear>
        </Page>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
