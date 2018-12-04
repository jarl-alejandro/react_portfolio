import React from 'react';
import styled from 'styled-components';
import Page from '../templates/Page';
import projects from '../data/projects';



const Gallery = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

const Thumbnails = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: scroll;
  height: 100px;
  
  @media screen and (min-width: 960px) {
    height: 80vh
    flex-wrap: wrap;
  }
`

const MainView = styled.div` 
  margin: 20px;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px;

  @media screen and (min-width: 960px) {
    width: 100px;
    height: 100px;
  }
`;

export default () => (
  <Page title='Portfolio'>
    <Gallery>
      <Thumbnails>
        {projects.map(project => <Thumbnail key={project.name} src={project.image} alt={project.name} />)}
      </Thumbnails>
      <MainView>
        <img src={projects[0].image} alt="test" />
      </MainView>
    </Gallery>
  </Page>
)
