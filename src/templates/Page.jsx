import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: ${({home}) => home ? '3em 0' : '3em 1em' };
  
  @media screen and (min-width: 960px) {
    padding: ${({home}) => home ? '0' : '2' }em;
  }
`;

export default ({ children, title, scroll, home }) => (
  <Section scroll={scroll} home={home}>
      {title && <h1 className='uk-heading-hero'>{title}</h1>}
      {children}
  </Section>
)
