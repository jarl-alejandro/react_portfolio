import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'uikit/dist/css/uikit.min.css';
// import '@fortawesome/fontawesome-free/css/all.css'

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
  <Route render={({ location }) => {
    // Get page name
    const pathname = location.pathname.replace(/\//, '').replace(/^./, (match) => match.toUpperCase());

    /**
     * Getter: Window width dimension for route animations
     * @returns {Boolean} Larger window size(true)
     */
    const isLargeScreen = () => window.innerWidth >= 960;

    // Animation config for route changes
    const RouteContainer = posed.div({
      initial: {
        opacity: 0.2,
        x: isLargeScreen() ? '-46%' : '0%',           // Starts off the left side on larger screens
        y: isLargeScreen() ? '0%' : '-46%',           // Starts off the top for smaller screens
        rotateX: isLargeScreen() ? '120deg' : '0deg', // Rotate on x-axis for larger screens
        rotateY: isLargeScreen() ? '0deg' : '120deg', // Rotate on y-axis for smaller screens
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
        x: isLargeScreen() ? '-46%' : '0%',           // Moves off the left side on larger screens
        y: isLargeScreen() ? '0%' : '-46%',           // Moves off the top on smaller screens
        rotateX: isLargeScreen() ? '120deg' : '0deg', // Rotate on x-axis for larger screens
        rotateY: isLargeScreen() ? '0deg' : '120deg', // Rotate on y-axis for smaller screens
        scale: 0,
        transition: {
          duration: 500
        }
      }
    })


    return (
      <>
        {/* Head data */}
        <Helmet>

          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Indie+Flower|Special+Elite" rel="stylesheet" />

          {/* Change title based on site page */}
          <title>{pathname ? `${pathname} | ` : ''}Rodrick Bloomfield</title>
        </Helmet>
        <PoseGroup preEnterPose='initial'>
          <RouteContainer key={location.key ? location.key : 'switch'}>
            <Switch location={location} >
              {children.map(child => (<Route exact={child.props.path === '/'} path={child.props.path} render={() => child} key={child.props.path} />))}
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </>
    )
  }
  } />
);

class App extends Component {

  /**
   * Lifecycle: Setup uikit icons
   */
  componentDidMount = () => {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons');
    uikit.use(icons);

    const dotNavList = document.querySelectorAll('.uk-dotnav > li');
    if (dotNavList)
      dotNavList.forEach((item, i) => item.querySelector('a').setAttribute('aria-label', `Slideshow item ${i + 1} selector`));
  }

  render() {
    return (
      // SPA framing
      <Layout>

        {/* Transitional router */}
        <PosedRouter>
          {/* Homepage */}
          <Home path='/' />

          {/* About Page */}
          <About path='/about' />

          {/* Portfolio Page */}
          <Portfolio path='/work' />
        </PosedRouter>
      </Layout>
    );
  }
}

export default App;
