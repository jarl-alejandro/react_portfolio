import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

const pages = ['/', '/about', '/work'];

const Items = styled.div`
    display: flex
    justify-content: space-evenly;
    align-items: center;
    // flex-grow: 0.2;

    @media screen and (min-width: 960px) {
      flex-grow: 0.1;
      flex-direction: column;
    }
  `

export default () => (
  <Items>
    {pages.map(path => (<NavItem key={`${path}_lrg`} path={path} />))}
  </Items>
)
