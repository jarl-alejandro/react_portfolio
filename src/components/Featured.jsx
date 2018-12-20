import React from 'react';
import styled from 'styled-components';

import Page from '../templates/Page'
import projects from '../data/projects'

const SlideShowItem = ({ name, description, for: _for, image, link, repo, sources }) => {

  const Img = styled.img`
    width: 100%;
    height: 100%;
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

  const Overlay = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      opacity: 0;
      transition: opacity 500ms ease-out;

      &:hover {
        opacity: 1;
        transition: opacity 500ms ease-in;
      }
  `;

  return (
    <li>
      <div className='uk-position-cover' data-uk-slideshow-parallax='scale: 0.2, 1, 0.2;'>
        {/* <Img src={image} alt={name} /> */}
        <picture>
          {sources && sources.map(source => {
            const width = source.match(/\d+x/)[0].replace('x', '');
            const min = Number(width * 0.70).toString();
            const max = Number(width * 1.15).toString();
            return <source key={source} media={`(min-width: ${min}px ) and (max-width: ${max}px )`} srcSet={source} />
          })}
          <img src={image} alt={name} />
        </picture>
      </div>
      <div className='uk-overlay uk-overlay-primary uk-position-bottom uk-text-justify uk-transition-slide-bottom uk-padding-small'>
        <ProjectName className='uk-margin-remove'>{name}</ProjectName>
        <Meta className=''>{description}</Meta>
        <Meta className='uk-text-right uk-margin-small-top'>{_for}</Meta>
      </div>
      <Overlay className='uk-overlay uk-overlay-primary uk-position-cover'>
        <div data-uk-grid>
          <a href={link}>
            <p className='uk-icon-button' data-uk-icon='icon: world; ratio: 2'></p>
            <p>Site</p>
          </a>
          <a href={repo}>
            <p className='uk-icon-button'  data-uk-icon='icon: code; ratio: 2'></p>
            <p>Repo</p>
          </a>
        </div>
      </Overlay>
    </li>
  );
}



export default () => {

  const featuredProjects = projects.filter(project => project.featured);

  const SlideNav = styled.button`
    opacity: 0.2;
    transition: all 450ms ease-out;
    
    &:hover {
      opacity: 1;
      color: black;
      transform: translate(${({ direction }) => direction === 'previous' ? '' : '-'}0.25em, -2.5em) scale(1.5);
      transition: all 450ms ease-in;
    }
  `;

  return (
    <Page>
      <h2 className='uk-heading-line uk-text-center'><span>Featured Projects</span></h2>

      <div className='uk-container uk-padding-remove' data-uk-slideshow=' autoplay: true; autoplay-interval: 5000; pause-on-hover'>
        <div className='uk-position-relative uk-padding-small uk-margin-remove'>

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
