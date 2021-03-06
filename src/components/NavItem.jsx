import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default ({ path }) => {
  const _path = path === '/' ? 'home' : path; // Check if path is root
  const linkName = _path.replace(/\//g, '');  // Clean up pathname

  //#region styled_components

  const icons = {
    home: 'home',
    about: 'user',
    work: 'thumbnails'
  }

  const Icon = styled.span`
    font-family: 'Fredericka the Great', cursive;
    box-sizing: border-box;
    text-align: center;
    margin-top: 0.5em;
    transition: transform 500ms linear 500ms;
    
    svg:first-child {
      transform: scale(1.25);
    }

    &::after {
      content: '${props => props.linkName || 'HOME'}';
      display:  block;
      font-size: 0.75em;
      position: relative;
      bottom: 0.75em;
      opacity: 0;
    }

   &:hover {
     color: darkred;
     
     svg:first-child {
       opacity: 0;
       transition: opacity 250ms ease-out;
      }
      
      &:after {
        opacity: 1;
        transition: opacity 300ms ease-out;
      }
    }

    @media screen and (min-width: 960px) {
      transform: rotate(-90deg);
      transition: transform 500ms linear 500ms;
    }
  `;

  //#endregion

  return (
    <Link to={path}>
      <Icon linkName={linkName.toUpperCase()} data-uk-icon={icons[linkName]} aria-label={linkName}></Icon>
    </Link>
  )
}
