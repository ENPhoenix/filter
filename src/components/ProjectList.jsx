function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <img
          key={`${project.img}-${index}`}
          className="project-list__item"
          src={project.img}
          alt={project.category}
        />
      ))}
    </div>
  )
}

export default ProjectList
