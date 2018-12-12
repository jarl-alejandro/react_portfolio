import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Router, Location } from '@reach/router';
import { Helmet } from 'react-helmet';
import 'uikit/dist/css/uikit.min.css';
import '@fortawesome/fontawesome-free/css/all.css'

// Component imports
import Layout from './templates/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

/**
 * Posed: Route transition setting
 */
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

/**
 * Transitional router setup
 * @param {Object} param0 Component props, extract children
 */
const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => {

      const pathname = location.pathname.replace(/\//, '').replace(/^./, (match) => match.toUpperCase());

      return (
        <>
          <Helmet>
            <title>{pathname ? `${pathname} | ` : ''}Rodrick Bloomfield</title>
          </Helmet>
          <PoseGroup preEnterPose='initial'>
            <RouteContainer key={location.key || 'test'}>
              <Router location={location}>{children}</Router>
            </RouteContainer>
          </PoseGroup>
        </>
      )
    }}
  </Location>
)

class App extends Component {

  /**
   * Lifecycle: Setup uikit icons
   */
  componentDidMount = () => {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons');
    uikit.use(icons);
  }

  render() {
    return (
      // SAP framing
      <Layout>
        {/* Transitional router */}
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
