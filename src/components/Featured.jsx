import React from 'react';
import Page from '../templates/Page'
import projects from '../data/projects'

const SlideShowItem = ({ name, description, for: _for, image, link }) => {

  return (
    <li>
      <a href={link}>
        <div className='uk-position-cover uk-position-medium' data-uk-slideshow-parallax='scale: 0.2, 1, 0.2;'>
          <img className='uk-position-center uk-padding-large' src={image} alt={name} data-uk-cover />
        </div>
        <div className='uk-overlay uk-overlay-primary uk-position-bottom uk-text-justify uk-transition-slide-bottom'>
          <h3 className='uk-margin-remove'>{name}</h3>
          <p className='uk-margin-remove'>{description}</p>
          <p className='uk-text-meta uk-text-right'>{_for}</p>
        </div>
      </a>
    </li>
  );
}



export default () => {

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <Page>
      <h2 className='uk-heading-line'>Featured Projects</h2>

      <div data-uk-slideshow=' autoplay: true; autoplay-interval: 5000; pause-on-hover'>
        <div className='uk-position-relative uk-padding'>

          {/* Slide show list */}
          <ul className='uk-slideshow-items'>
            {featuredProjects.map(project => (<SlideShowItem key={project.name} {...project} />))}
          </ul>

          {/* Slideshow Nav */}
          <button className='uk-position-center-left uk-position-small uk-hidden-hover' data-uk-icon='icon: chevron-left; ratio: 3' data-uk-slideshow-item='previous'></button>
          <button className='uk-position-center-right uk-position-small uk-hidden-hover' data-uk-icon='icon: chevron-right; ratio: 3' data-uk-slideshow-item='next'></button>

          <ul className='uk-slideshow-nav uk-dotnav uk-flex-center uk-margin'></ul>
        </div>
      </div>

    </Page>
  )
}
