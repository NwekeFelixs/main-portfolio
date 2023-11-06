import React from 'react'
import '../css/style.css'
// Import images for tools
import ajaxLogo from '../images/ajax.png';
import gulpLogo from '../images/gulp.png';
import webpackLogo from '../images/webpack.png';
import gitLogo from '../images/git.png';
import npmLogo from '../images/npm.png';
import commandLogo from '../images/command.png';
import vsCodeLogo from '../images/vs-code.png';
import trelloLogo from '../images/trello.png';
import clickupLogo from '../images/clickup.png';
import slackLogo from '../images/slack.png';
import photoshopLogo from '../images/photoshop.png';
import adobeXdLogo from '../images/adobe-xd.png';

function Tools() {
    const tools = [
        { id: 1, name: 'Ajax', logo: ajaxLogo },
        { id: 2, name: 'Gulp', logo: gulpLogo },
        { id: 3, name: 'Webpack', logo: webpackLogo },
        { id: 4, name: 'Git', logo: gitLogo },
        { id: 5, name: 'Npm', logo: npmLogo },
        { id: 6, name: 'Command Line', logo: commandLogo },
        { id: 7, name: 'VS Code', logo: vsCodeLogo },
        { id: 8, name: 'Trello', logo: trelloLogo },
        { id: 9, name: 'ClickUp', logo: clickupLogo },
        { id: 10, name: 'Slack', logo: slackLogo },
        { id: 11, name: 'Photoshop', logo: photoshopLogo },
        { id: 12, name: 'Adobe XD', logo: adobeXdLogo },
      ];

  return (
    <section className="skills" id="skills">
    <div className="skills-content section-content">
      <p className="section-subtitle">My tools</p>
      <h2 className="h3 section-title">What are  the tools I use?</h2>
      <p className="section-text">
        I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
      </p>
      <div className="skills-toggle" data-toggle-box>
        <button
          className='toggle-btn'
          data-toggle-btn
        >
          Tools
        </button>
      </div>
    </div>
    
      <div className='skills-box' data-skills-box>
        <ul className="skills-list">
          {tools.map((tool) => (
            <li key={tool.id}>
              <div className="skill-card">
                <div className="tooltip">{tool.name}</div>
                <div className="card-icon">
                  <img src={tool.logo} alt={`${tool.name} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    
    </section>
  )
}

export default Tools