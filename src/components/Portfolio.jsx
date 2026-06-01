import { Component } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import projects from '../data/projects'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'All',
    }
  }

  onSelectFilter = (filter) => {
    this.setState({ selected: filter })
  }

  render() {
    const { selected } = this.state
    const filters = ['All', ...new Set(projects.map((project) => project.category))]
    const filteredProjects =
      selected === 'All'
        ? projects
        : projects.filter((project) => project.category === selected)

    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    )
  }
}

export default Portfolio
