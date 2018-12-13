import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

const pages = ['/', '/about', '/work'];

const Items = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

  `

export default () => (
  <Items>
    {pages.map(path => (<NavItem key={`${path}_lrg`} path={path} />))}
  </Items>
)
