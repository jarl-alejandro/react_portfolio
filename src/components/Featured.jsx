import React from 'react';
import styled from 'styled-components';

import Page from '../templates/Page';
import projects from '../data/projects';

/**
 * Slideshow item links overlay component
 * @param {Object} props Passed in data
 */
const LinksOverlay = ({ link, repo }) => {

  //#region overlay_styled-components
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

  //#endregion

  return (
    <Overlay className='uk-overlay uk-overlay-primary uk-position-cover'>
      <div data-uk-grid>

        {/* Active site link */}
        <a href={link}>
          <p className='uk-icon-button' data-uk-icon='icon: world; ratio: 2'></p>
          <p>Site</p>
        </a>

        {/* Repository link */}
        <a href={repo}>
          <p className='uk-icon-button' data-uk-icon='icon: code; ratio: 2'></p>
          <p>Repo</p>
        </a>
      </div>
    </Overlay>
  );
}

/**
 * Slideshow item metadata overlay component
 * @param {Object} param0 Passed in data
 */
const MetaOverlay = ({ name, description, _for }) => {

  //#region item_styled_components

  const ProjectData = styled.div`
    width: 100%;
  `;


  const ProjectName = styled.h3`
    font-size: 120%;

    @media screen and (min-width: 960px) {
      font-size: 150%;
    }
  `;

  const Meta = styled.p`
    font-size: 65%;
    margin: 0;

    @media screen and (min-width: 960px) {
      font-size: 100%;
    }
  `;

  //#endregion

  return (
    <div className='uk-overlay uk-overlay-primary uk-position-bottom uk-text-justify uk-transition-slide-bottom uk-padding-small'>
      <ProjectData>
        <ProjectName className='uk-margin-remove'>{name}</ProjectName>
        <Meta className=''>{description}</Meta>
        <Meta className='uk-text-right uk-margin-small-top'>- {_for}</Meta>
      </ProjectData>
    </div>
  );
}

/**
 * Slideshow item image component
 * @param {Object} props Passed in data
 */
const ProjectImage = ({ sources, image, name }) => (
  <picture>
    {sources && sources.map(source => {
      const width = source.match(/\d+x/)[0].replace('x', '');
      const min = Number(Math.floor(width * 0.70)).toString();
      const max = Number(Math.ceil(width * 1.15)).toString();
      return <source key={source} media={`(min-width: ${min}px ) and (max-width: ${max}px )`} srcSet={source} />
    })}
    <img src={image} alt={name} />
  </picture>
);

/**
 * Featured projects slideshow items
 * @param {Object} props Passed in data
 */
const SlideShowItem = ({ name, description, for: _for, image, link, repo, sources }) => {

  return (
    <li>
      <div className='uk-position-cover' data-uk-slideshow-parallax='scale: 0.2, 1, 0.2;'>
        {/* Responsive project picture */}
        <ProjectImage name={name} image={image} sorces={sources} />
      </div>

      {/* Project meta data overlay */}
      <MetaOverlay name={name} description={description} _for={_for} />

      {/* Project links overlay */}
      <LinksOverlay link={link} repo={repo} />

    </li>
  );
}

/**
 * Featured project component
 */
export default () => {

  // Filtered projects that are marked featured
  const featuredProjects = projects.filter(project => project.featured);

  // Styled navigation button
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
      {/* Title */}
      <h2 className='uk-heading-line uk-text-center'><span>Featured Projects</span></h2>

      {/* Featured projects design */}
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

        {/* Dotnav navigation */}
        <ul className='uk-slideshow-nav uk-dotnav uk-flex-center uk-margin-remove'></ul>
      </div>
    </Page>
  )
}
