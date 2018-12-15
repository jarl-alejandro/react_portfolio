import React from 'react';
import Badges from './Badges';

export default ({ name, image, for: _for, link, description, repo, languages, frameworks, utilities }) => (
  <div className='uk-card uk-card-large uk-card-default'>
    
    {/* Card Header */}
    <div className='uk-card-header'>
      <div className="uk-grid-small uk-flex-middle" data-uk-grid>
        
        {/* Thumbnail */}
        <div className='uk-width-auto'>
          <img className='uk-border-circle' width='40' height='40' src={image} alt={name} />
        </div>

        {/* Summary info */}
        <div className='uk-width-expand uk-flex uk-flex-between uk-flex-middle uk-flex-wrap'>
          
          {/* Title/meta */}
          <div>
            <h3 className='uk-card-title uk-margin-remove-bottom'>{name}</h3>
            <p className='uk-text-meta uk-margin-remove-top'>{_for}</p>
          </div>

          {/* Project links */}
          <div className='uk-flex-inline'>
            
            {/* Site link */}
            {link && (
              <div data-uk-lightbox>
                <a className='uk-margin-small-right uk-flex uk-flex-column uk-link-text'  href={link} data-caption={description} data-type='iframe' data-alt={name} >
                  <span className='uk-icon-button' data-uk-icon='world'></span>
                  <span className='uk-text-center uk-text-meta'>Site</span>
                </a>
              </div>
            )}

            {/* Github repo link */}
            <a className='uk-flex uk-flex-column uk-link-text' href={repo} >
              <span className='uk-icon-button' data-uk-icon='github'></span>
              <span className='uk-text-center uk-text-meta'>Repo</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Card body */}
    <div className='uk-card-body'>
      
      {/* Project Image(s) */}
      <div className='uk-card-media-bottom'>
        <img src={image} alt={name} />
      </div>
    </div>

    {/* Card Footer */}
    <div className='uk-card-footer uk-text-center'>
      
      {/* Drawer: Project details */}
      <ul data-uk-accordion>
        <li>
          
          {/* Drawer toggle */}
          <div className='uk-accordion-title'>
            <button className='uk-button uk-button-text'>Details</button>
          </div>

          {/* Project details */}
          <div className="uk-accordion-content">
            
            {/* Description data */}
            <p>{description}</p>

            {/* Badges: List of skills and badges */}
            <Badges frameworks={frameworks} languages={languages} utilities={utilities} />
          </div>
        </li>
      </ul>
    </div>
  </div>
)
