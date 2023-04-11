import React, { useState } from 'react';

function Experience() {
  const [activeItem, setActiveItem] = useState(null);
  const experienceItems = [
    {
      id: 1,
      company: 'General Assembly',
      jobTitle: 'Software Engineering Immersive, Student',
      startDate: '12/2022',
      endDate: '03/2023',
      description: "Graduated from General Assembly's software engineering bootcamp with hands-on experience in full-stack application development, proficiency in front-end and back-end development, database management, and API integration. Completed multiple projects utilizing programming and web fundamentals, Git repository management, and JSON API creation. Projects also incorporated industry-standard practices such as version control and testing."
    },
    {
      id: 2,
      company: 'Self Run',
      jobTitle: 'Aid Distribution Project Manager',
      startDate: '01/2020',
      endDate: '07/2021',
      description: "Annually delivered Aid distribution in Tartous, Syria. Spearheaded project assisting displaced families: managed financials; directed 8 personnel between 3 cities. Managed financials and budgets; completed market research to make most of budget, increasing the project reach by 20%. Coordinated with local organizations – such as schools and NGOs- to allocate resources to over 15 displaced families"
      },
    {
      id: 3,
      company: 'Self Employed',
      jobTitle: 'Private math tutor',
      startDate: '08/2019',
      endDate: '12/2019',
      description: "Work one-on-one with students in grades 7-12 to improve academic performance and develop study skills. Develop customized lesson plans and provide individualized support tailored to each student's learning style. Track student progress and communicate with parents/guardians about student achievements and areas for improvement. Adapted teaching strategies to meet the individual needs and learning styles of each student. Helped students improve their grades and test scores, with many students showing measurable progress throughout the school year. Received positive feedback from students and parents/guardians, with students showing an average improvement of one letter grade after working with me"}
  ];

  return (
    <section>
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experienceItems.map((item) => (
          <div key={item.id} className="experience-item">
            <div className="experience-item-content">
              <h3>{item.jobTitle}</h3>
              <p>{item.company}</p>
              <p>{item.startDate} - {item.endDate || 'Present'}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;


