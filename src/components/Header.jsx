import React from 'react';
import styled from 'styled-components';
import logo from '../icons/logo.svg';
import Social from './Social';
import NavItems from './NavItems';

//#region styled_components
const Nav = styled.nav`
  z-index: 2000;
  position: fixed;
  padding: 0 1em 0 5px;
  box-sizing: border-box;
  background: #dcd0c0;
  border: 1px solid #dcd0c0;
  box-shadow: 0 0 5px 1px #373737, 0 2px 15px 2px #8b8b8b inset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  transform-origin: left bottom;
  width: 100%;
  transition: all 500ms ease-in;

  &  a {
    color: #373737;
  }

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

//#endregion

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
