import React from 'react';

function Skills() {
  const frontendSkills = [
    {
      name: 'HTML',
      thumbnail: 'https://imgur.com/9uAlfl4',
    },
    {
      name: 'CSS',
      thumbnail: '/css-thumbnail.png',
    },
    {
      name: 'JavaScript',
      thumbnail: '/javascript-thumbnail.png',
    },
    {
      name: 'ReactJS',
      thumbnail: '/react-thumbnail.png',
    },
    {
      name: 'Bootstrap',
      thumbnail: '/bootstrap-thumbnail.png',
    }
  ];

  const backendSkills = [
    {
      name: 'Ruby on Rails',
      thumbnail: '/rails-thumbnail.png',
    },
    {
      name: 'NodeJS',
      thumbnail: '/nodejs-thumbnail.png',
    },
    {
      name: 'MongoDB',
      thumbnail: '/mongodb-thumbnail.png',
    },
    {
      name: 'PostgreSQL',
      thumbnail: '/postgresql-thumbnail.png',
    }
  ];

  const softSkills = [
    {
      name: 'Problem Solving',
      thumbnail: '/problem-solving-thumbnail.png',
    },
    {
      name: 'Creative',
      thumbnail: '/creative-thumbnail.png',
    },
    {
      name: 'Communication',
      thumbnail: '/communication-thumbnail.png',
    },
    {
      name: 'Teamwork',
      thumbnail: '/teamwork-thumbnail.png',
    },
    {
      name: 'Results Driven',
      thumbnail: '/results-driven-thumbnail.png',
    }
  ];

  const renderSkillSection = (skills) => {
    return (
      <div className="skill-section">
        {skills.map((skill) => (
          <div className="skill-item">
            {/* <img src={skill.thumbnail} alt={skill.name} /> */}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section>
      <h2>Skills</h2>
      <div className="skill-rows">
        <div className="skill-row">
          <div className="skill-column">
            <h3>Frontend</h3>
            {renderSkillSection(frontendSkills)}
          </div>
        </div>
        <div className="skill-row">
          <div className="skill-column">
            <h3>Backend</h3>
            {renderSkillSection(backendSkills)}
          </div>
        </div>
        <div className="skill-row">
          <div className="skill-column">
            <h3>Soft Skills</h3>
            {renderSkillSection(softSkills)}
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Skills;

