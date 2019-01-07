import React from 'react';
import styled from 'styled-components';

export default () => {

  // Social username data
  const social_links = {
    email: 'rodrickbloomfield@yahoo.com',
    linkedin: 'rodrick-bloomfield-95a82793',
    github: 'bloom305'
  }


  const sites = Object.entries(social_links);

  // Social mediums' base links
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

  //#region styled_components

  const Icon = styled.span`
    transition: transform 500ms linear 500ms;

    &:hover {
      color: darkred;
    }
    
    @media screen and (min-width: 960px) {
      transform: rotate(-90deg);
      transition: transform 500ms linear 500ms;
    }
  `;

  //#endregion

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '3em'
      }}
    >
      {sites.map(([key, username]) => {
        const { href, icon } = social[key];
        return (
          <Icon
            style={{ padding: 2 }}
            key={key}
            href={`${href}${username}`}
            data-uk-icon={icon}
            aria-label={key}
          >
          </Icon>
        )
      })}
    </div>
  )
}
