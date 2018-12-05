import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Router, Location } from '@reach/router'
import 'uikit/dist/css/uikit.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

import Layout from './templates/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const RouteContainer = posed.div({
  initial: {
    opacity: 0,
    x: '-100%'
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 500
    }
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 500
    }
  }
})

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup preEnterPose='initial'>
        <RouteContainer key={location.key || 'test'}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
)

class App extends Component {

  componentDidMount = () => {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons');
    uikit.use(icons);
  }

  render() {
    return (
      <Layout>
        <PosedRouter>
          <Home path='/' />
          <About path='/about' />
          <Portfolio path='/work' />
        </PosedRouter>
      </Layout>
    );
  }
}

export default App;
