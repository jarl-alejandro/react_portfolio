import React from 'react';
import styled, { css } from 'styled-components';

export default (props) => {
  const { as, custom, children } = props;
  //#region styled_components

  const tagMixin = css`
    :before, :after {
      font-family: 'Indie Flower', cursive;
      color: #c0b283;
      opacity: 0.5;
    }
  `;

  const writingTagMixin = css`
    padding: 0 1em;
    text-align: justify;

    :before {
      display: block;
    }

    :after {
      margin: 0 1em;
    }
  `;

  const divTagMixin = css`

    :before {
      display: block;
      margin: 0 1em;
    }

    :after {
      margin: 0 1em;
    }
  `;

  const customTagMixin = css`
    :before {
      display: block;
    }
  
    :after {
      display: block;
    } 
  `;

  const aTagMixin = css`
    color: #373737;

    :hover {
      color: darkred;
      text-decoration: none
    }

    :before {
      margin-right: 5px;
    } 
    :after {
      margin-left: 5px;
    }
  `;

  const getMixin = (el) => {
    switch (el) {
      case 'article':
        return '';
      case 'a':
        return aTagMixin;
      case 'h1':
      case 'h2':
      case 'p':
        return writingTagMixin;
      case 'div':
        return divTagMixin;
      default:
        return customTagMixin;
    }
  }

  const getContent = (el, custom) => custom ? custom : el === 'article' ? 'body' : el;

  const Tag = styled.div.attrs({
    href: ({href}) => console.log(href)
  })`

    ${tagMixin}
    ${({ as }) => getMixin(as)}

    :before {
      content: '<${({ as, custom }) => getContent(as, custom)}>';
    }
    :after {
      content: '</${({ as, custom }) => getContent(as, custom)}>';
    } 
  `;

  //#endregion

  return (
    <Tag as={as} custom={custom} {...props}>
      {children}
    </Tag>
  )
}
