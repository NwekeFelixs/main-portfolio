import React from 'react';
import '../css/style.css';
import heroBanner from '../images/hero-banner.png';
import heroBannerMd from '../images/hero-banner-md.png';
import heroBannerSm from '../images/hero-banner-sm.png';
import {IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter,} from 'react-icons/io5';

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
        <h2 className="h2 hero-title">We Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>
      <ul className="hero-social-list">
        <li>
          <a href="#" className="hero-social-link">
            <IoLogoFacebook/>
            <div className="tooltip">Facebook</div>
          </a>
        </li>
        <li>
          <a href="#" className="hero-social-link">
            <IoLogoTwitter/>
            <div className="tooltip">Twitter</div>
          </a>
        </li>
        <li>
          <a href="#" className="hero-social-link">
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
