import React, { Component } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
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
  width: 95%;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 960px) {
    align-items: center;
    max-width: 150px;
  }

  @media screen and (min-width: 2200px) {
    align-items: inherit;
    max-width: 20%;
  }
`;

const Thumbnails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  height: 100px;
  border: 10px inset #c0b283;
  box-sizing: border-box;
  padding: 1em;
  border-radius: 20px;
  box-shadow: 3px 3px 5px 1px #373737, 5px 10px 50px 10px #dcd0c0 inset;
  
  @media screen and (min-width: 960px) {
    height: 80vh;
    flex-direction: column;
    overflow-y: auto;
  }

  @media screen and (min-width: 2200px) {
    flex-wrap: wrap;
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
  min-width: 50%;
  max-width: 100%;
  align-self: center;
  
  @media screen and (min-width: 960px) {
    width: 75%;
  }

  @media screen and (min-aspect-ratio: 16/9) {
    width: inherit;
    max-width: 75%;
  }
`;

//#endregion

//#region posed_components
const Project = posed.div({
  initial: {
    opacity: 0,
    rotateX: 360
  },
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1000
    }
  },
  exit: {
    opacity: 0,
    rotateX: 360,
    transition: {
      duration: 500
    }
  }
})

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

  //#region getters/handlers

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
        filteredProjects: _projects.filter(project => project.skills.includes(value))
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
  getProject = (onMain) => {
    this.setState({ onMain });  // Set the project to main view
  }

  /**
   * Gets the component to render in the MainView
   * @param {Object} onMain Project to search for
   * @param {Array} _projects List of projects to search
   * @returns {Object} Component to render; selected or default
   */
  getMain = (onMain, _projects) => {
    const display = _projects.filter(project => project === onMain)
      .map(project =>
        <Project key={project.name}>
          <ProjectCard {...project} />
        </Project>);

    return display.length !== 0 ? display : <Project key='default'><ProjectCard {..._projects[0]} /></Project>
  }

  //#endregion

  render() {

    // Destructure the state for use
    const { filteredProjects, _projects, onMain } = this.state;

    // Make single list for technologies used in all the projects
    const tags = _projects
      .map(project => project.skills)
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
                          onClick={_ => this.getProject(project)}
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
                // Project selection animation
                <PoseGroup preEnterPose='initial'>
                  {this.getMain(onMain, _projects)}
                </PoseGroup>
              }
            </MainView>
          </Gallery>
      </Page>
    )
  }
}
