import React from 'react';
import styled, { css } from 'styled-components';

export default ({ as, children }) => {

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
      default:
        return divTagMixin;
    }
  }

  const getContent = (el) => el === 'article' ? 'body' : el;

  const Tag = styled.div`

${tagMixin}
${({ as }) => getMixin(as)}

:before {
  content: '<${({ as }) => getContent(as)}>';
}
:after {
  content: '</${({ as }) => getContent(as)}>';
} 
`;

  //#endregion

  return (
    <Tag as={as}>
      {children}
    </Tag>
  )
}
