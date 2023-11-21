import React from 'react';
import '../css/style.css';
import heroBanner from '../images/hero-banner.png';
import heroBannerMd from '../images/hero-banner-md.png';
import heroBannerSm from '../images/hero-banner-sm.png';
import {IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter,} from 'react-icons/io5';

function Hero() {
  return (
    <section className="hero" id="home">
      <figure className="hero-banner">
        <picture>
          <source srcSet={heroBanner} media="(min-width: 768px)" />
          <source srcSet={heroBannerMd} media="(min-width: 500px)" />
          <img src={heroBannerSm} alt="A man in a blue shirt with a happy expression" className="w-100" />
        </picture>
      </figure>
      <div className="hero-content">
        <h2 className="h2 hero-title">I Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>
      <ul className="hero-social-list">
        <li>
          <a href="https://github.com/NwekeFelixs" className="hero-social-link">
            <IoLogoGithub/>
            <div className="tooltip">Facebook</div>
          </a>
        </li>
        <li>
          <a href="https://x.com/Feylicks1?t=eUknlccySkCIY25Peht78Q&s=09" className="hero-social-link">
            <IoLogoTwitter/>
            <div className="tooltip">Twitter</div>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/felix-nweke-a88951282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app" className="hero-social-link">
            <IoLogoLinkedin/>
            <div className="tooltip">LinkedIn</div>
          </a>
        </li>
      </ul>
      <a href="#stats" className="scroll-down">Scroll</a>
    </section>
  );
}

export default Hero;
