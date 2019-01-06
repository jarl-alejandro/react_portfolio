import React from 'react';
import styled from 'styled-components';
import Badges from './Badges';

//#region styled_components

const Card = styled.div`
  box-shadow: 0 28px 50px #37373759;
`;

const Info = styled.div`
  width: 100%;
`;

const Title = styled.p`
  font-size: 125%;
`;

const Meta = styled.p`
  font-size: 90%;
  color: #373737b0;
`;

const Link = styled.a``;

const IconButton = styled.span`
  background: #f4f4f4;
  color: #dcd0c0;
  border-radius: 100%;

  ${Link}:hover & {
    background: #c0b283;
    color: #f4f4f4; 
  }
`;

const LinkMeta = styled.span`
  color: #373737b0;
  text-align: center;
  ${Link}:hover & {
    color: #c0b283;
  }
`;

export default ({ name, image, for: _for, link, description, repo, skills, thumbnail, sources }) => (
  <Card className='uk-card uk-card-default uk-border-rounded'>

    {/* Card Header */}
    <div className='uk-card-header'>
      <div className=" uk-flex-middle" data-uk-grid>

        {/* Thumbnail */}
        <div className='uk-visible@s'>
          <img className='uk-border-circle' width='40' height='40' src={thumbnail ? thumbnail : image} alt={name} />
        </div>

        {/* Summary info */}
        <div className='uk-width-expand uk-flex uk-flex-between uk-flex-middle'>

          {/* Title/meta */}
          <Info>
            <Title className='uk-card-title uk-margin-remove-bottom'>{name}</Title>
            <Meta style={{ fontSize: '90%' }} className='uk-margin-remove-top'>{_for}</Meta>
          </Info>

          {/* Project links */}
          <div className='uk-flex-inline'>

            {/* In page view */}
            {link && (
              <>
                <div data-uk-lightbox>
                  <Link className='uk-margin-small-right uk-flex uk-flex-column uk-link-text' href={link} data-caption={description} data-type='iframe' data-alt={name} >
                    <IconButton className='uk-icon-button' data-uk-icon='play'></IconButton>
                    <LinkMeta>View</LinkMeta>
                  </Link>
                </div>

                {/* Site Link */}
                <Link className='uk-margin-small-right uk-flex uk-flex-column uk-link-text' href={link} data-caption={description} data-type='iframe' data-alt={name} >
                  <IconButton className='uk-icon-button' data-uk-icon='world'></IconButton>
                  <LinkMeta>Site</LinkMeta>
                </Link>
              </>
            )}

            {/* Github repo link */}
            <Link className='uk-flex uk-flex-column uk-link-text' href={repo} >
              <IconButton className='uk-icon-button' data-uk-icon='github'></IconButton>
              <LinkMeta>Repo</LinkMeta>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Card Drawer */}
    <div className='uk-text-center'>

      {/* Drawer: Project details */}
      <ul data-uk-accordion='toggle: #accordion-activate'>
        <li>

          {/* Drawer toggle */}
          <Link as='button' id='accordion-activate' className='uk-button uk-button-text'>
            <LinkMeta>Details</LinkMeta>
            <IconButton className='uk-margin-small-left' data-uk-icon='info'></IconButton>
          </Link>

          {/* Project details */}
          <div className="uk-accordion-content">

            {/* Description data */}
            <Info>
              <Meta>{description}</Meta>
            </Info>

            {/* Badges: List of skills and badges */}
            <Info>
              <Badges skills={skills} />
            </Info>
          </div>
        </li>
      </ul>
    </div>

    {/* Card body */}
    <div className='uk-card-body'>

      {/* Project Image(s) */}
      <div className='uk-card-media-bottom'>
        <picture>
          {sources && sources.map(source => {

            if (/16x9/.test(source)) {
              const width = source.match(/\d+x/)[0].replace('x', '');
              const height = source.match(/x\d+/)[0].replace('x', '');
              return <source key={source} media={`(min-aspect-ratio: ${width}/${height})`} srcSet={source}></source>

            } else {
              const width = Number(source.match(/\d+x/)[0].replace('x', ''));
              if (width <= 1080 && width > 360) {
                const max = Math.ceil(width).toString();
                const min = Math.floor(width - 359).toString();
                return <source key={source} media={`${Number(min) < 320 ? '' : `(min-width: ${min}px ) and `}(max-width: ${max}px )`} srcSet={source} />
              }
              else if (width > 1080) {
                return <source key={source} media='(min-width: 1081px)' srcSet={source} />
              }
              else {
                return <img key={source} src={source} alt={name} />
              }
            }
          })}
          {/* <img src={image} alt={name} /> */}
        </picture>
      </div>
    </div>
  </Card>
)
