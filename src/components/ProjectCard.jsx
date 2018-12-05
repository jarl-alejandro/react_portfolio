import React from 'react';
import Badges from './Badges';

export default ({ name, image, for: _for, link, description, repo, languages, frameworks, utilities }) => (
  <div className='uk-card uk-card-large uk-card-default'>
    <div className='uk-card-header'>
      <div className="uk-grid-small uk-flex-middle" data-uk-grid>
        <div className='uk-width-auto'>
          <img className='uk-border-circle' width='40' height='40' src={image} alt={name} />
        </div>
        <div className='uk-width-expand uk-flex uk-flex-between uk-flex-middle uk-flex-wrap'>
          <div>
            <h3 className='uk-card-title uk-margin-remove-bottom'>{name}</h3>
            <p className='uk-text-meta uk-margin-remove-top'>{_for}</p>
          </div>
          <div className='uk-flex-inline'>
            {link && (
              <div data-uk-lightbox>
                <a className='uk-icon-button uk-margin-small-right' data-uk-icon='laptop' href={link} data-caption={description} data-type='iframe' data-alt={name} > </a>
              </div>
            )}
            <a className='uk-icon-button' data-uk-icon='github' href={repo} > </a>
          </div>
        </div>
      </div>
    </div>
    <div className='uk-card-body'>
      <div className='uk-card-media-bottom'>
        <img src={image} alt={name} />
      </div>
    </div>
    <div className='uk-card-footer uk-text-center'>
      <ul data-uk-accordion>
        <li>
          <div className='uk-accordion-title'>
            <button className='uk-button uk-button-text'>Details</button>
          </div>
          <div className="uk-accordion-content">
            <p>{description}</p>
            <Badges frameworks={frameworks} languages={languages} utilities={utilities} />
          </div>
        </li>
      </ul>
    </div>
  </div>
)
