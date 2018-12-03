import React, { Component } from 'react';
import 'uikit/dist/css/uikit.min.css';

import Layout from './templates/Layout';

class App extends Component {

  componentDidMount = () => {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons');
    uikit.use(icons);
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Hello World</h1>
        </div>
      </Layout>
    );
  }
}

export default App;
