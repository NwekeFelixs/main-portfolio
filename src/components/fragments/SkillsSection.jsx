import React, { useState } from 'react';
import '../css/style.css';

// Import images for skills
import html5Logo from '../images/html5.png';
import css3Logo from '../images/css3.png';
import javascriptLogo from '../images/javascript.png';
import typescriptLogo from '../images/typescript.png';
import jqueryLogo from '../images/jquery.png';
import bootstrapLogo from '../images/bootstrap.png';
import reactLogo from '../images/react.png';
import sassLogo from '../images/sass.png';
import angularLogo from '../images/angular.png';



function SkillsSection() {

  const skills = [
    { id: 1, name: 'HTML5', logo: html5Logo },
    { id: 2, name: 'CSS3', logo: css3Logo },
    { id: 3, name: 'JavaScript', logo: javascriptLogo },
    { id: 4, name: 'TypeScript', logo: typescriptLogo },
    { id: 5, name: 'jQuery', logo: jqueryLogo },
    { id: 6, name: 'Bootstrap', logo: bootstrapLogo },
    { id: 7, name: 'React', logo: reactLogo },
    { id: 8, name: 'SASS', logo: sassLogo },
    { id: 8, name: 'Angular', logo: angularLogo },
  ];



  return (
    <section className="skills container" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>
        <h2 className="h3 section-title">What My Programming Skills Included?</h2>
        <p className="section-text">
          I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
        </p>
        <div className="skills-toggle" data-toggle-box>
          <button
            className="toggle-btn"
            data-toggle-btn
          >
            Skills
          </button>
        </div>
      </div>
      <div className="skills-box" data-skills-box>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.id}>
              <div className="skill-card">
                <div className="tooltip">{skill.name}</div>
                <div className="card-icon">
                  <img src={skill.logo} alt={`${skill.name} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SkillsSection;
