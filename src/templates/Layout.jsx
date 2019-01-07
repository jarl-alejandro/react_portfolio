import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

//#region styled_components
const Main = styled.main`
  position: absolute;
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

//#endregion

export default ({ children }) => (
  // App backdrop
  <>

    {/* App Header/Navbar */}
    <Header />

    {/* App content window */}
    <Main>
      {children}
    </Main>
  </>
)
