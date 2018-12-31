import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../templates/Page';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Dropdown from '../components/Dropdown';

//#region styled_components

const Gallery = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const SelectorView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 960px) {
    max-width: 20%;
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
    height: 80vh;
    display: block;
    // flex-wrap: wrap;
    // align-items: flex-start;
    overflow-x: auto;
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
  max-width: 100%;

  @media screen and (min-width: 960px) {
    max-width: 75%;
  }
`;

//#endregion

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _projects: projects,        // Original project list   
      filteredProjects: projects, // Filtered project lists
      onMain: null                // Project detail controller
    }
  }

  /**
   * Handler function for dropdown menu
   * @param {Object}  e Event object
   */
  handleChange = (e) => {
    const value = e.target.value; // Selected value

    // If value is not empty string
    if (value) {

      // Filter list based on selected value
      this.setState(({ _projects }) => ({
        filteredProjects: _projects.filter(project => project.languages.concat(project.frameworks, project.utilities).includes(value))
      }))
    }
    else
      // Reset filtered list to original list
      this.setState(({ _projects }) => ({ filteredProjects: _projects }));
  }

  /**
   * Used for setting the project to be displayed in detail area
   * @param {Object}  onMain  The project object to render details
   */
  getMainImage = (onMain) => {
    this.setState({ onMain });  // Set the project to main view
  }

  render = () => {

    // Destructure the state for use
    const { filteredProjects, _projects, onMain } = this.state;

    // Make single list for technologies used in all the projects
    const tags = _projects
      .map(project => project.languages.concat(project.frameworks, project.utilities))
      .reduce((acc, project) => acc.concat(project), [])
      .reduce((acc, tag) => !acc.includes(tag) ? acc.concat(tag) : acc, [])
      .sort((a, b) => a > b);
    
    // tags.unshift('');

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
