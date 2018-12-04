import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../templates/Page';
import projects from '../data/projects';



const Gallery = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const SelectorView = styled.div`
  width: 100%;

  @media screen and (min-width: 960px) {
    flex-grow: 1;
  }
`;

const Thumbnails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x auto;
  overflow-y: auto;
  height: 100px;
  
  @media screen and (min-width: 960px) {
    height: 80vh
    flex-wrap: wrap;
    align-items: flex-start;
    overflow-x hidden;
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

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _projects: projects,
      filteredProjects: projects
    }
  }

  handleChange = (e) => {
    const value = e.target.value;

    if (value) {
      this.setState(({ _projects }) => ({
        filteredProjects: _projects.filter(project => project.languages.concat(project.frameworks, project.utilities).includes(value))
      }))
    }
    else
      this.setState(({ _projects }) => ({ filteredProjects: _projects }));
  }

  render = () => {

    const { filteredProjects, _projects } = this.state;

    const tags = _projects
      .map(project => project.languages.concat(project.frameworks, project.utilities))
      .reduce((acc, project) => acc.concat(project), [])
      .reduce((acc, tag) => !acc.includes(tag) ? acc.concat(tag) : acc, [])
      .sort((a, b) => a > b);

    return (
      <Page title='Portfolio'>
        <Gallery>
          <SelectorView>
            <select name="filter" id="filter" onChange={this.handleChange} defaultValue='All'>
              <option value='' >All</option>
              {tags.map(tag => <option key={tag}>{tag}</option>)}
            </select>
            <Thumbnails>
              {filteredProjects.map(project => <Thumbnail key={project.name} src={project.image} alt={project.name} />)}
            </Thumbnails>
          </SelectorView>
          <MainView>
            <img src={projects[0].image} alt="test" />
          </MainView>
        </Gallery>
      </Page>
    )
  }
}
