import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4em 2em;
  
  @media screen and (min-width: 960px) {
    padding: 2em;
  }
`;

export default ({ children, title, scroll }) => (
  <Section scroll={scroll}>
      {title && <h1>{title}</h1>}
      {children}
  </Section>
)
