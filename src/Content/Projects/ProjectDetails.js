import React from 'react';

function ProjectDetails({ project }) {
  const { title, description, url } = project;

  return (
    <div className="project-details">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="link">
        View Project
      </a>

    </div>
  );
}

export default ProjectDetails;
