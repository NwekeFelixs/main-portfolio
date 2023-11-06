import React from 'react';
import '../css/style.css';
import projectImage1 from '../images/project-1.png';
import projectImage2 from '../images/project-2.png';
import projectImage3 from '../images/project-3.png';
import projectImage4 from '../images/project-4.png';
import projectImage5 from '../images/project-5.png';
import projectImage6 from '../images/project-6.png';
import projectImage7 from '../images/project-7.png';

function Portfolio() {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>
            <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>
            <p className="section-text">
              We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.
            </p>
          </div>
        </li>

        <li>
          <a href="#" className="project-card">
            <figure className="card-banner">
              <img src={projectImage1} className="w-100" alt="A macintosh on a yellow background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Filmlane</h3>
              <time className="publish-date" datetime="2022-04">April 2022</time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="project-card">
            <figure className="card-banner">
              <img src={projectImage2} className="w-100" alt="On a Blue background, a Wacom and a mouse." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Grilli Restaurant Website</h3>
              <time className="publish-date" datetime="2022-04">April 2022</time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="project-card">
            <figure className="card-banner">
              <img src={projectImage3} className="w-100" alt="A Cassette tape on a mellow apricot background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Homeverse</h3>
              <time className="publish-date" datetime="2022-04">April 2022</time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="project-card">
            <figure className="card-banner">
              <img src={projectImage4} className="w-100" alt="Blue digital watch on a dark liver background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Anon Ecommerce Website</h3>
              <time className="publish-date" datetime="2022-04">April 2022</time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="project-card">
            <figure className="card-banner">
              <img src={projectImage5} className="w-100" alt="On a dark liver background, Airport luggage car carrying a luggage." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Bloggy</h3>
              <time className="publish-date" datetime="2022-04">April 2022</time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="project-card">
            <figure className="card-banner">
              <img src={projectImage6} className="w-100" alt="On a yellow background, a digital watch and a glass." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Eduhome</h3>
              <time className="publish-date" datetime="2022-04">April 2022</time>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="project-card">
            <figure className="card-banner">
              <img src={projectImage7} className="w-100" alt="A fujifilm instant camera on a dark electric blue background." />
            </figure>
            <div className="card-content">
              <h3 className="h4 card-title">Crafti</h3>
              <time className="publish-date" datetime="2022-04">April 2022</time>
            </div>
          </a>
        </li>

        <li>
          <button className="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
