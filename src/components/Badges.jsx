import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';

export default ({ skills }) => {
  console.log(skills)

  const badges = skills.sort((a, b) => a > b);

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
