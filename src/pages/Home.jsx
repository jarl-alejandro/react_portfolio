import React from 'react';
import Page from '../templates/Page';
import Elevator from '../components/ElevatorPitch';
import Featured from '../components/Featured';
import pitch from '../data/elevator';
import projects from '../data/projects';
import Element from '../components/Element';

export default () => (
  <Page home scroll title="Hi, I'm Rodrick" >
    {/* Subtitle */}

    <Element custom='body'>

      <Element as='div'>
        {/* Elevator pitch hero image component */}
        <Elevator pitch={pitch} />
      </Element>

      {/* Featured projects sections */}
      <Featured projects={projects} />

    </Element>

  </Page>
)