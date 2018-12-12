import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: ${({home}) => home ? '3em 0' : '3em 1em' };
  
  @media screen and (min-width: 960px) {
    padding: ${({home}) => home ? '2em 0' : '2em' };
  }
`;

export default ({ children, title, scroll, home }) => (
  <Section scroll={scroll} home={home}>
      {title && <h1 className='uk-heading-line uk-text-center'><span>{title}</span></h1>}
      {children}
  </Section>
)
