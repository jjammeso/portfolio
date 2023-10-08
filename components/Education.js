
import { projectData } from './data.js';

const Education = () => {
  return (
    <div className="Education-container" id="education">
      <div className="Education-grid">
      <h2>Education</h2>
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fas fa-graduation-cap folder-icon"></i>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Education;