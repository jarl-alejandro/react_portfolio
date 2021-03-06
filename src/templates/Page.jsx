import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: ${({home}) => home ? '4em 0' : '4em 1em' };
  transition: padding 500ms ease-in;
  max-height: 100vh;
  
  @media screen and (min-width: 960px) {
    padding: ${({home}) => home ? '2em 0' : '2em' };
    transition: padding 500ms ease-in;
  }
`;

export default ({ children, title, scroll, home }) => (
  <Section home={home}>
      {title && <h1 className='uk-heading-line uk-text-center'><span>{title}</span></h1>}
      {children}
  </Section>
)
