import { Component } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'

const projects = [
  { img: '/img/mon.jpg', category: 'Business Cards' },
  { img: '/img/200.jpg', category: 'Websites' },
  { img: '/img/emi_haze.jpg', category: 'Websites' },
  { img: '/img/codystretch.jpg', category: 'Websites' },
  { img: '/img/Triangle_003.jpg', category: 'Business Cards' },
  { img: '/img/place200x290.png', category: 'Websites' },
  { img: '/img/200.jpg', category: 'Websites' },
  { img: '/img/transmission.jpg', category: 'Business Cards' },
  { img: '/img/place200x290_1.png', category: 'Websites' },
  { img: '/img/place200x290_2.png', category: 'Flayers' },
  { img: '/img/the_ninetys_brand.jpg', category: 'Websites' },
  { img: '/img/dia.jpg', category: 'Business Cards' },
  { img: '/img/Triangle_350x197.jpg', category: 'Websites' },
  { img: '/img/emi_haze.jpg', category: 'Websites' },
  { img: '/img/transmission.jpg', category: 'Business Cards' },
  { img: '/img/Triangle_350x197_1.jpg', category: 'Websites' },
  { img: '/img/place200x290_3.png', category: 'Flayers' },
]

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
