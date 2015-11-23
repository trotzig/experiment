import AnimatedPieChart from 'components/AnimatedPieChart';
import Appear from 'components/Appear';
import AppearSound from 'components/AppearSound';
import Grow from 'components/Grow';
import React from 'react';
import Page from 'components/Page'

require('normalize.css');
require('styles/App.css');

const blogPostImage = require('../images/blog_post.png')

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
          <Appear timeout={1000}><Grow>has made more commits</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Chris Chan: 7974</Grow></Appear>
          <Appear timeout={1000} grow>
            <div style={{
              marginTop: '3vh'
            }}>
              <img src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/005/08f/316/13ef886.jpg'/>
            </div>
          </Appear>
        </Page>
        <Page>
          <Appear><Grow length={20}>Instead of</Grow></Appear>
          <Appear><b><Grow>QWERTY</Grow></b></Appear>
        </Page>
        <Page>
          <AppearSound src='http://freesound.org/data/previews/243/243035_3592917-lq.mp3'/>
          <Appear><Grow length={20}>Joe uses</Grow></Appear>
          <Appear><b><Grow>COLEMAK</Grow></b></Appear>
        </Page>
        <Page>
          <Appear><Grow>He's always trying to win people over</Grow></Appear>
          <Appear>
            <img style={{marginTop: '3vh' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/KB_US-Colemak.svg/500px-KB_US-Colemak.svg.png'/>
          </Appear>
        </Page>
        <Page>
          <Appear><Grow>So far, his conversion rate is</Grow></Appear>
          <AppearSound timeout={2000} src='http://freesound.org/data/previews/172/172949_3226163-lq.mp3'/>
          <Appear timeout={2000} grow><var><Grow>&lt;1%</Grow></var></Appear>
        </Page>
        <Page>
          <Appear><Grow>That's terrible, Joe.</Grow></Appear>
        </Page>
        <Page>
          <Appear>
            <img style={{ maxHeight: '45vh' }} src='https://joinbrigade.files.wordpress.com/2014/12/joe2.jpg'/>
          </Appear>
          <Appear><Grow length={15}>"I know."</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Joe regularly contributes</Grow></Appear>
          <Appear><Grow>to Open Source projects</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>SCSS-lint</Grow></Appear>
          <Appear><Grow>(2nd contributor after @sds)</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>react-waypoint</Grow></Appear>
          <Appear><Grow>(co-created with @trotzig)</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Chunky-PNG</Grow></Appear>
          <Appear><Grow>(recently assigned co-owner)</Grow></Appear>
        </Page>
        <Page>
          <Appear>
            <img style={{maxHeight: '35vh'}} src='https://camo.githubusercontent.com/e971b90d14f27c03c8fba5efc994fed7080cadaa/68747470733a2f2f7261772e6769746875622e636f6d2f6469666675782f6469666675782f6d61737465722f6170702f6173736574732f696d616765732f6469666675782e706e67'/>
          </Appear>
          <Appear><Grow>(co-created with @trotzig)</Grow></Appear>
        </Page>
        <Page>
          <Appear>
            <div style={{ width: '30vw', margin: '0 auto' }}>
              <AnimatedPieChart/>
            </div>
          </Appear>
          <Appear><Grow>react-simple-pie-chart</Grow></Appear>
          <Appear><Grow length={25}>(creator of)</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>He has written</Grow></Appear>
          <Appear><var><Grow>11</Grow></var></Appear>
          <Appear><Grow>blog posts for the company</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Many of which are our most successful ones</Grow></Appear>
          <Appear>
            <img style={{ width: '50vw', marginTop: '3vh' }} src={blogPostImage}/>
          </Appear>
        </Page>
        <Page>
          <Appear><Grow>For some reason, he lives in the</Grow></Appear>
          <Appear grow><Grow>EAST BAY</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Because of that, he has spent</Grow></Appear>
          <Appear grow><var><Grow>1,290 hours</Grow></var></Appear>
          <Appear><Grow>on BART, getting to and from work</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>That's terrible, Joe.</Grow></Appear>
        </Page>
        <Page>
          <Appear>
            <img style={{ maxHeight: '45vh' }} src='https://joinbrigade.files.wordpress.com/2014/12/joe2.jpg'/>
          </Appear>
          <Appear><Grow length={15}>"I know."</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Did you know that...</Grow></Appear>
        </Page>
        <Page>
          <Appear>
            <img style={{ maxHeight: '45vh', marginBottom: '3vh' }} src='https://cdn-images-1.medium.com/max/1013/1*cESd-NIbVnvnr0NRjVobOA.png'/>
          </Appear>
          <Appear><Grow>Joe makes his own illustrations</Grow></Appear>
        </Page>
        <Page>
          <Appear>
            <img style={{ maxHeight: '45vh', marginBottom: '3vh' }} src='http://shiftingpixel.com/slir/w900/wp-content/uploads/2008/01/joe-lencioni.jpg'/>
          </Appear>
          <Appear><Grow>he used to play in a band</Grow></Appear>
        </Page>
        <Page>
          <Appear>
            <img style={{ maxHeight: '45vh', marginBottom: '3vh' }} src='https://lh3.googleusercontent.com/-f9h46ik5uJU/U9NhIVah4gI/AAAAAAAArdg/pw7x9AHQQJk/w1060-h796-p-rw/IMG_20140715_205727.jpg'/>
          </Appear>
          <Appear><Grow>he is a seasoned pizza maker</Grow></Appear>
          <Appear><Grow length={50}>(that's an actual Lencioni pizza)</Grow></Appear>
        </Page>
        <Page>
          <Appear><Grow>Goodbye Joe</Grow></Appear>
          <Appear><Grow>We'll miss you a lot.</Grow></Appear>
        </Page>
        <Page>
          <Appear><b><Grow>A lot.</Grow></b></Appear>
        </Page>
        <Page>
          <Appear><i><Grow>This scrollentation was created by @trotzig.</Grow></i></Appear>
          <Appear><i><Grow>It is powered by components developed by Joe.</Grow></i></Appear>
        </Page>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
