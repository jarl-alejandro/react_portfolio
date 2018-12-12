import React from 'react';
import styled, { keyframes } from 'styled-components';

import Page from '../templates/Page'
import projects from '../data/projects'

const SlideShowItem = ({ name, description, for: _for, image, link }) => {

  const Img = styled.img`
    width: 100%;
    height: 100%;
  `;

  const Overlay = styled.div`
  `;

  const ProjectName = styled.h3`
    font-size: 1.25em;

    @media screen and (min-width: 960px) {
      font-size: 1.5em;
    }
  `;

  const Meta = styled.p`
    font-size: 0.65em;
    margin: 0;

    @media screen and (min-width: 960px) {
      font-size: inherit;
    }
  `;

  return (
    <li style={{ height: '100%' }}>
      <a href={link}>
        <div className='uk-position-cover' data-uk-slideshow-parallax='scale: 0.2, 1, 0.2;'>
          <Img src={image} alt={name} />
        </div>
        <Overlay className='uk-overlay uk-overlay-primary uk-position-bottom uk-text-justify uk-transition-slide-bottom uk-padding-small'>
          <ProjectName className='uk-margin-remove'>{name}</ProjectName>
          <Meta className=''>{description}</Meta>
          <Meta className='uk-text-right uk-margin-small-top'>{_for}</Meta>
        </Overlay>
      </a>
    </li>
  );
}



export default () => {

  const featuredProjects = projects.filter(project => project.featured);

  const blinkerPrev = keyframes`
  from{
    opacity: 0;
    left: 2em;
  } 
  
  50% {
    opacity: 0.5;
    left: 1em;
  }
  
  to {
    opacity: 1;
    left: inherit;
  }
  `;

  const blinkerNext = keyframes`
    from{
      opacity: 0;
      right: 2em;
    } 
    
    50% {
      opacity: 0.5;
      right: 1em;
    }
    
    to {
      opacity: 1;
      right: inherit;
    }
  `;

  const SlideNav = styled.button`
    opacity: 0.2;
    
    &:hover {
      opacity: 1;
      color: black;
      animation: ${({ direction }) => direction === 'previous' ? blinkerPrev : blinkerNext} 500ms ease-out 1;
      transform: translate(${({ direction }) => direction === 'previous' ? '' : '-'}0.25em, -2.5em) scale(1.5);
      transition: all 450ms ease-in;
    }
  `;

  return (
    <Page>
      <h2 className='uk-heading-line uk-text-center'><span>Featured Projects</span></h2>

      <div data-uk-slideshow=' autoplay: true; autoplay-interval: 5000; pause-on-hover'>
        <div className='uk-position-relative uk-padding uk-margin-remove'>

          {/* Slide show list */}
          <ul className='uk-slideshow-items'>
            {featuredProjects.map(project => (<SlideShowItem key={project.name} {...project} />))}
          </ul>

          {/* Slideshow Nav */}
          <SlideNav direction='previous' className='uk-position-center-left uk-position-small' data-uk-icon='icon: chevron-left; ratio: 3' data-uk-slideshow-item='previous'></SlideNav>
          <SlideNav direction='next' className='uk-position-center-right uk-position-small' data-uk-icon='icon: chevron-right; ratio: 3' data-uk-slideshow-item='next'></SlideNav>
        </div>
        <ul className='uk-slideshow-nav uk-dotnav uk-flex-center uk-margin-remove'></ul>
      </div>

    </Page>
  )
}
