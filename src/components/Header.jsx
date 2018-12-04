import React from 'react';
import styled from 'styled-components';
import logo from '../icons/logo.svg';

import Social from './Social';
import NavItems from './NavItems';

const Nav = styled.nav`
  z-index: 2000;
  position: fixed;
  padding: 0 5px;
  box-sizing: border-box;
  width: 100%;
  height: 3em;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 250ms ease-in;

  @media screen and (min-width: 960px) {
    height: 100%;
    width: 3em;
    padding: 5px 0;
    flex-direction: column;
  }
`

const Logo = styled.img`
  height: 3em;
  width: 3em;
`

export default () => (
  <header>
    <Nav>
      <Logo src={logo} alt='Logo' />
      <NavItems />
      <Social />
    </Nav>
  </header>
)
