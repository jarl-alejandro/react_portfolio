import React from 'react';
import styled from 'styled-components';

export default () => {
  const social_links = {
    email: 'rodrickbloomfield@yahoo.com',
    linkedin: 'rodrick-bloomfield-95a82793',
    github: 'bloom305'
  }
  const sites = Object.entries(social_links);

  const social = {
    email: {
      href: 'mailto:',
      icon: 'mail'
    },
    dribble: {
      href: 'https://dribbble.com/',
      icon: 'dribble'
    },
    facebook: {
      href: 'https://www.facebook.com/',
      icon: 'facebook'
    },
    flickr: {
      href: 'https://www.flickr.com/photos/',
      icon: 'flickr'
    },
    github: {
      href: 'https://github.com/',
      icon: 'github'
    },
    instagram: {
      href: 'https://instagram.com/',
      icon: 'instagram'
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/',
      icon: 'linkedin'
    },
    pinterest: {
      href: 'https://www.pinterest.com/',
      icon: 'pinterest'
    },
    twitter: {
      href: 'https://www.twitter.com/',
      icon: 'twitter'
    },
    youtube: {
      href: 'https://youtube.com/',
      icon: 'youtube'
    },
    rss: {
      href: 'mailto:',
      icon: 'rss'
    }
  }

  const Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (min-width: 960px) {
      flex-direction: column;
    }
  `

  const Anchor = styled.a`
    display: block;
    padding: 2px;
  `;

  const Icon = styled.span`
    color: white;

    &:hover {
      color: red;
    }
  `;


  return (
    <Items>
      {sites.map(([key, username]) => {
        const { href, icon } = social[key];
        return (<Anchor key={key} href={`${href}${username}`}><Icon data-uk-icon={icon}></Icon></Anchor>)
      })}
    </Items>
  )
}