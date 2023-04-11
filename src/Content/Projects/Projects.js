import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const projects = [
    {
      id: 1,
      title: 'Full stack Gaming Matchmaking App',
      thumbnail: 'https://i.imgur.com/jRwOisz.png',
      description: 'A full-stack gaming matchmaking app created using React, Node.js, Axios, MongoDB, and Mongoose.',
      url: 'https://github.com/maljabouri/LFG-FE'
    },
    {
      id: 2,
      title: 'React Watch List App',
      thumbnail: 'https://i.imgur.com/Sa2s230.png',
      description: 'Built a web application using React and JavaScript allowing users to search and save movies to a watch list. Utilized React component architecture, API integration, and responsive design with Bootstrap.',
      url: "https://github.com/maljabouri/Watch-List-App"
    },
    {
      id: 3,
      title: 'Social Network App',
      thumbnail: 'https://s3.amazonaws.com/quietus_production/images/articles/28068/napster_logo_1585915729_crop_500x475.png',
      description: 'Implemented feed and post functionality for a social media app using React, Node.js, Express, and MongoDB. Collaborated with the team to integrate front-end and back-end functionality.',
      url: "https://github.com/maljabouri/project3-frontend"
    },
    {
      id: 4,
      title: 'Tic Tac Toe',
      thumbnail: 'https://papergames.io/en/assets/games/tictactoe/thumbnail.png',
      description: 'Developed a simple Tic Tac Toe game using JavaScript, HTML, and CSS. Used DOM manipulation, event handling, and CSS styling.',
      url: "https://github.com/maljabouri/Tic-Tac-Toe"
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
                <img 
                src={project.thumbnail} 
                alt={project.title}
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Projects;
