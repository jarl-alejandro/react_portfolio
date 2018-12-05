import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Main = styled.main`
  position: absolute;
  // background: grey;
  width: 100%;
  height: 100%;
  transition: all 250ms;
  
  @media screen and (min-width: 960px) {
    top: 0;
    left: 3em;
    width: calc(100% - 3em);
    transition: all 250ms;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  // background: grey;
`;

export default ({ children }) => (
  // App backdrop
  <Background>

    {/* App Header/Navbar */}
    <Header />

    {/* App content window */}
    <Main>
      {children}
    </Main>
  </Background>
)
