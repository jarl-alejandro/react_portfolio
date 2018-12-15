import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../templates/Page';
import projects from '../data/projects';

import ProjectCard from '../components/ProjectCard';
import Dropdown from '../components/Dropdown';



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
    max-width: 25%;
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


const Thumbnail = styled.img`
width: 50px;
height: 50px;
margin: 1em;
border-radius: 10%;

@media screen and (min-width: 960px) {
  width: 100px;
  height: 100px;
}
`;

const MainView = styled.div` 
  margin: 20px;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _projects: projects,
      filteredProjects: projects,
      onMain: null
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

  getMainImage = (onMain) => {
    this.setState({ onMain });
  }

  render = () => {

    const { filteredProjects, _projects, onMain } = this.state;

    const tags = _projects
      .map(project => project.languages.concat(project.frameworks, project.utilities))
      .reduce((acc, project) => acc.concat(project), [])
      .reduce((acc, tag) => !acc.includes(tag) ? acc.concat(tag) : acc, [])
      .sort((a, b) => a > b);
    
    tags.unshift('');

    return (
      <Page title='Portfolio'>
        {/* Portfolio page content */}
        <Gallery>

          {/* Portfolio selection window*/}
          <SelectorView>

            {/* Portfolio filter selector */}
            <Dropdown tags={tags} handleChange={this.handleChange} />


            {/* Project selector */}
            <Thumbnails>
              {
                filteredProjects
                  .map(
                    project =>
                      <Thumbnail
                        key={project.name}
                        data-src={project.thumbnail ? project.thumbnail : project.image}
                        alt={project.name}
                        onClick={_ => this.getMainImage(project)}
                        data-uk-img
                        width='50'
                        height='50'
                      />
                  )
              }
            </Thumbnails>
          </SelectorView>

          {/* Project view window */}
          <MainView>
            {
              // Is project selected
              onMain
                ? <ProjectCard {...onMain} />       // Selected project
                : <ProjectCard {...projects[0]} />  // Default: First listed project
            }
          </MainView>
        </Gallery>
      </Page>
    )
  }
}
