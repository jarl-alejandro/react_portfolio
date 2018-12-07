import React from 'react';

export default ({ tags, handleChange }) => (
  <div data-uk-form-custom='target: > * > span:first-child'>
    <select
      name="filter"
      id="filter"
      onChange={handleChange}
      defaultValue='All'
      className='uk-select'
    >
      {/* Default: All projects visible */}
      <option value='' >All</option>

      {
        // Options: List of skills and technologies used
        tags.map(tag => <option key={tag}>{tag}</option>)
      }
    </select>
    <button className='uk-button uk-button-default uk-form-small' type='button'>
      <span></span>
      <span className='uk-margin-left' data-uk-icon='triangle-down'></span>
    </button>
  </div>
)
