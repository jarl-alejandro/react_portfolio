import React from 'react';
import Page from '../templates/Page';

import Elevator from '../components/ElevatorPitch';
import pitch from '../data/elevator'
import Featured from '../components/Featured';

export default () => (
  <Page home>
    <h2 className='uk-heading-line uk-text-center'><span>Getting To Know Me</span></h2>
    <Elevator pitch={pitch} />
    <Featured />
  </Page>
)