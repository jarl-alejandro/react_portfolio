import React from 'react';
import Badge from './Badge'

export default ({ languages, frameworks, utilities }) => {
 
  
  const badges = languages.concat(frameworks, utilities);

  return (
    <div className='uk-flex uk-flex-middle uk-flex-around uk-flex-wrap'>
      {badges.map(badge => <Badge key={badge} badge={badge} />)}
    </div>
  )
}
