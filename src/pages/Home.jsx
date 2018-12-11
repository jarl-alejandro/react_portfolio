import React from 'react';
import Page from '../templates/Page';

import Elevator from '../components/ElevatorPitch';
import pitch from '../data/elevator'
import Featured from '../components/Featured';

export default () => (
  <Page home>
    <Elevator pitch={pitch} />
    <Featured />
  </Page>
)