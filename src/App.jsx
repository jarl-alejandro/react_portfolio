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
 * Transitional router setup
 * @param {Object} param0 Component props, extract children
 */
const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => {

      const pathname = location.pathname.replace(/\//, '').replace(/^./, (match) => match.toUpperCase());
  
      const isLargeScreen = () => window.innerWidth >= 960;

      const RouteContainer = posed.div({
        initial: {
          opacity: 0.2,
          x: isLargeScreen() ? '-46%' : '0%',
          y: isLargeScreen() ? '0%' : '-46%',
          rotateX: isLargeScreen() ? '120deg' : '0deg',
          rotateY: isLargeScreen() ? '0deg' : '120deg',
          scale: 0
        },
        enter: {
          opacity: 1,
          x: '0%',
          y: '0%',
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            delay: 500,
            duration: 500
          }
        },
        exit: {
          opacity: 0.2,
          x: isLargeScreen() ? '-46%' : '0%',
          y: isLargeScreen() ? '0%' : '-46%',
          rotateX: isLargeScreen() ? '120deg' : '0deg',
          rotateY: isLargeScreen() ? '0deg' : '120deg',
          scale: 0,
          transition: {
            duration: 500
          }
        }
      })

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
