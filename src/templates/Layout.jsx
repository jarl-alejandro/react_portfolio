import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Main = styled.main`
  box-sizing: border-box;
  position: absolute;
  background: grey;
  padding: 5px;
  top: 3em;
  width: 100%;
  height: calc(100% -3em);
  transition: all 250ms;

  @media screen and (min-width: 960px) {
    top: 0;
    left: 3em;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: grey;
`;

export default ({ children }) => (
  <Background>
    <Header />
    <Main>
      {children}
    </Main>
  </Background>
)
