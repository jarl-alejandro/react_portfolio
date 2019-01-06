import React from 'react';
import Page from '../templates/Page';
import Elevator from '../components/ElevatorPitch';
import Featured from '../components/Featured';
import pitch from '../data/elevator';
import projects from '../data/projects';

export default () => (
  <Page home scroll title='Getting To Know Me'>
    {/* Subtitle */}
    {/* <h2 className='uk-heading-line uk-text-center'><span>Getting To Know Me</span></h2> */}

    {/* Elevator pitch hero image component */}
    <Elevator pitch={pitch} />

    {/* Featured projects sections */}
    <Featured projects={projects} />
  </Page>
)