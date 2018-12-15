import React from 'react';

export default ({ badge }) => {

  // Badge rendering data
  const badges = {
    AJAX: { icon: 'ajax.svg' },
    Angular: { icon: 'fab fa-angular' },
    AngularJS: { icon: 'fab fa-angular', child: 'JS' },
    API: { icon: 'api.svg' },
    Arduino: { icon: 'arduino.png' },
    Assembly: { icon: 'asm.svg' },
    Autoprefixer: { icon: 'fab fa-autoprefixer' },
    Axios: { icon: 'axios.svg' },
    A11y: { icon: 'fas fa-universal-access' },
    Bootstrap: { icon: 'bootstrap.svg' },
    C_Cpp: { icon: 'C.svg' },
    Canvas: { icon: 'canvas.svg' },
    CSS: { icon: 'fab fa-css3-alt' },
    CSSLint: { icon: 'csslint.svg' },
    Electronics: { icon: 'electronics.svg' },
    ESLint: { icon: 'eslint.svg' },
    Gulp: { icon: 'fab fa-gulp' },
    HTML: { icon: 'fab fa-html5' },
    HTMLHint: { icon: 'htmlhint.svg' },
    JavaScript: { icon: 'fab fa-js' },
    JQuery: { icon: 'jq.svg' },
    Mapbox: { icon: 'mapbox.svg' },
    MaterialUI: { icon: 'material.svg' },
    Pug: { icon: 'pug.svg' },
    React: { icon: 'fab fa-react' },
    RFID: { icon: 'rfid.svg' },
    Sass: { icon: 'fab fa-sass' },
    Sensors: { icon: 'sensor.svg' },
    ServiceWorker: { icon: 'sw.svg' },
    Touchscreen: { icon: 'touch.svg' },
    W3CSS: { icon: 'w3.svg' },
    UIKit: { icon: 'uikit' },
    FourSquare: { icon: 'foursquare' },
    other: { icon: 'uk-text-meta' },
  }

  // Badge styling object
  const style = {
    width: '2.5em',
    height: '2.5em'
  }

  /**
   * Conditionally render badge
   */
  const getBadge = () => {

    //Sanitize badge string
    const _badge = badge.replace('/', '_'); 

    // Check if badge is supported
    const match = badges[_badge] ? badges[_badge] : null; 

    // Badge is supported, render decal
    if (match) {

      // Check if supported by Font Awesome
      const isFA = /fab|fas \w/.test(match.icon);

      // Check if supported by image link 
      const isLink = /[.svg|/.png|/.jpg]$/.test(match.icon);

      // Font Awesome
      if (isFA) {

        // Check if additional string element
        const inner = match.child ? match.child : null;

        // Icon
        return (
          <i style={{fontSize: '2.5em' }} className={`${match.icon } ${inner && 'uk-margin-right-small'}`}>{inner}</i>
        )
      }

      // Link
      else if (isLink) {

        // Get image
        const image = require(`../icons/${match.icon}`)

        // Image
        return (
          <img style={style} src={image} alt={badge} />
        );
      }
        
      // Get from UIKit
      else {

        // UIKit icon
        return (
          <span style={style} data-uk-icon={`icon: ${match.icon}; ratio: 2`}></span>
        );
      }
    }

    // Badge not supported, print string
    else {

      // Text
      return (
        <span className={`${badges['other'].icon}`}>{badge}</span>
      );
    }
  }

  return (
    <span>
      {getBadge()}
    </span>
  );
}