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
  background: white;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;

  transform-origin: left bottom;
  width: 100%;
  transition: all 500ms ease-in;

  @media screen and (min-width: 960px) {
    width: 100vh;
    transform-origin: left bottom;
    transform: translate(0, -3em) rotate(90deg);
    transition: all 500ms ease-in;
  }
`

const Logo = styled.img`
  height: 3em;
  width: 3em;
  transition: all 500ms linear 500ms;

  @media screen and (min-width: 960px) {
    transform: rotate(-90deg);
    transition: all 500ms linear 500ms;
  }
`

export default () => (
  <header>
    <Nav>

      {/* Logo */}
      <Logo src={logo} alt='Logo' />

      {/* Navbar */}
      <NavItems />

      {/* Social links */}
      <Social />
    </Nav>
  </header>
)
