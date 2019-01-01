import React from 'react';
import styled from 'styled-components';

export default ({ badge }) => {

  // Badge rendering data
  const badges = {
    AJAX: { icon: 'ajax.png' },
    Angular: { icon: 'ang.png' },
    AngularJS: { icon: 'angjs.png' },
    API: { icon: 'api.png' },
    Arduino: { icon: 'arduino.png' },
    Assembly: { icon: 'asm.png' },
    Axios: { icon: 'axios.png' },
    A11y: { icon: 'a11y.png' },
    Bootstrap: { icon: 'bootstrap.png' },
    C: { icon: 'c.png' },
    Cpp: { icon: 'cpp.png' },
    C_Cpp: { icon: 'c_cpp.png' },
    Canvas: { icon: 'canvas.png' },
    CSS: { icon: 'css.png' },
    CSSLint: { icon: 'csslint.png' },
    Electronics: { icon: 'electronics.png' },
    ESLint: { icon: 'eslint.png' },
    Gulp: { icon: 'gulp.png' },
    HTML: { icon: 'html.png' },
    HTMLHint: { icon: 'htmlhint.png' },
    JavaScript: { icon: 'js.png' },
    JQuery: { icon: 'jq.png' },
    Mapbox: { icon: 'mapbox.png' },
    MaterialUI: { icon: 'material.png' },
    Pug: { icon: 'pug.png' },
    React: { icon: 'react.png' },
    RFID: { icon: 'rfid.png' },
    Sass: { icon: 'sass.png' },
    Sensors: { icon: 'sensor.png' },
    ServiceWorker: { icon: 'sw.png' },
    Touchscreen: { icon: 'touch.png' },
    W3CSS: { icon: 'w3.png' },
    UIKit: { icon: 'uikit.png' },
    FourSquare: { icon: 'foursquare.png' },
    other: { icon: 'uk-text-meta' },
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

      // Check if supported by image link 
      const isLink = /[.svg|/.png|/.jpg]$/.test(match.icon);

      // Link
      if (isLink) {

        // Get image
        const image = require(`../icons/${match.icon}`)

        // Image
        return (
          <img src={image} alt={badge} />
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

  const Container = styled.span`
    width: 1.25em;

    @media screen and (min-width: 520px) {
      width: initial;
    }
  `;

  return (
    <Container>
      {getBadge()}
    </Container>
  );
}
