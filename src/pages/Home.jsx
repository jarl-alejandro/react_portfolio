import React from 'react';
import Page from '../templates/Page';

import Elevator from '../components/ElevatorPitch';
import pitch from '../data/elevator'

export default () => (
  <Page title='Rodrick Bloomfield'>
    <Elevator pitch={pitch} />
  </Page>
)