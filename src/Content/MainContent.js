import React from 'react';
import BrandStatement from './BrandStatement';
import Skills from './Skills';
import Projects from './Projects/Projects';
import Experience from './Experience';
import Interests from './Interests';
import Contact from './Contact';

function MainContent() {
  return (
    <main>
      <div className="app-container" style={{ flexWrap: 'wrap' }}>
        <div className="column brand-statement" style={{ width: '50%' }}>
          <BrandStatement />
        </div>
        <div className="column skills" style={{ width: '50%' }}>
          <Skills />
        </div>
      </div>
      <Projects />
      <div className="app-container" style={{ flexWrap: 'wrap' }}>
        <div className="column brand-statement" style={{ width: '50%' }}>
          <Experience />
        </div>
        <div className="column skills" style={{ width: '50%' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Interests />
            <Contact className="contact-section" />
          </div>
        </div>
      </div>
    </main>
  );
}



export default MainContent;
