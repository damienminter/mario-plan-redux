import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
// connect to store using react-redux (for react)
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {

    // console.log(this.props);
    // get the projects 
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

// Create a function to connect to the project store 
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

// Tell connect how to connect
export default connect(mapStateToProps)(Dashboard)
