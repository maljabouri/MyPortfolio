import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const projects = [
    {
      id: 1,
      title: 'Full stack Gaming Matchmaking App',
      thumbnail: 'https://placehold.it/200x200',
      description: 'A full-stack gaming matchmaking app created using React, Node.js, Axios, MongoDB, and Mongoose.'
    },
    {
      id: 2,
      title: 'React Watch List App',
      thumbnail: 'https://placehold.it/200x200',
      description: 'Built a web application using React and JavaScript allowing users to search and save movies to a watch list. Utilized React component architecture, API integration, and responsive design with Bootstrap.'
    },
    {
      id: 3,
      title: 'Social Network App',
      thumbnail: 'https://placehold.it/200x200',
      description: 'Implemented feed and post functionality for a social media app using React, Node.js, Express, and MongoDB. Collaborated with the team to integrate front-end and back-end functionality.'
    },
    {
      id: 4,
      title: 'Tic Tac Toe',
      thumbnail: 'https://placehold.it/200x200',
      description: 'Developed a simple Tic Tac Toe game using JavaScript, HTML, and CSS. Used DOM manipulation, event handling, and CSS styling.'
    }
  ];

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
  };

  return (
    <section>
      <h2 id='projects-header'>Projects</h2>
      <div className="project-thumbnails-wrapper">
        <div className="project-thumbnails">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-thumbnail"
              onClick={() => handleProjectClick(index)}
            >
              {selectedProjectIndex === index ? (
                <ProjectDetails project={project} />
              ) : (
                <img src={project.thumbnail} alt={project.title} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Projects;
