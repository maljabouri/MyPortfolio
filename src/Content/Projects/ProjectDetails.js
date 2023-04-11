import React from 'react';

function ProjectDetails({ project }) {
  const { title, description } = project;

  return (
    <div className="project-details">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">View Project</a>
    </div>
  );
}

export default ProjectDetails;
