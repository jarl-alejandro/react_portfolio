import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 5em;
  
  @media screen and (min-width: 960px) {
    padding-top: 2em;
  }
`;

export default ({ children, title }) => (
  <Section className='uk-section'>
    <div className='uk-container'>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  </Section>
)
