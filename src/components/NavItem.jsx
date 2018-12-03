import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default ({ path }) => {
  const linkName = path.replace(/\//g, '');

  const icons = {
    home: 'home',
    about: 'user',
    work: 'thumbnails'
  }

  const Icon = styled.span`
    color: white;
    box-sizing: border-box;

    svg:first-child {
      transform: scale(1.25);
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    &::after {
      content: '${props => props.linkName || 'HOME'}';
      display:  block;
      font-size: 0.75em;
      position: relative;
      bottom: 0.5em;
      text-align: center;
      opacity: 0;
    }

   &:hover {
     color: red;
     
     svg:first-child {
       opacity: 0;
       transition: opacity 300ms ease-out;
      }
      
      &:after {
        opacity: 1;
        transition: opacity 300ms ease-out;
      }
    }

    @media screen and (min-width: 960px) {
      // margin: 1em 0;
    }
  `;

  return (
    <NavLink
      exact
      to={path}
    // activeStyle={{ color: 'red' }}
    >
      <Icon linkName={linkName.toUpperCase()} data-uk-icon={icons[linkName]}></Icon>
    </NavLink>
  )
}
