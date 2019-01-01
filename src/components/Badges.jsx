import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';

export default ({ languages, frameworks, utilities }) => {
 
  const badges = languages.concat(frameworks, utilities);

  const BadgeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  `;

  return (
    <BadgeContainer>
      {badges.map(badge => <Badge key={badge} badge={badge} />)}
    </BadgeContainer>
  )
}
