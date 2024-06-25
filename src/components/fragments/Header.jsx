import React, { useState, useEffect } from 'react';
import '../css/style.css';

function Header() {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [isNavToggleActive, setNavToggleActive] = useState(false);
  const [isLightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY >= 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light_theme') {
      setLightTheme(true);
      document.body.classList.add('light_theme');
    } else {
      setLightTheme(false);
      document.body.classList.add('dark_theme');
    }
  }, []);

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,ar', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      );
    };
    if (window.google && window.google.translate) {
      googleTranslateElementInit();
    } else {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = googleTranslateElementInit;
      document.body.appendChild(script);
    }
  }, []);

  const toggleElement = (elem) => {
    elem.classList.toggle('active');
  };

  const handleNavToggleClick = () => {
    setNavToggleActive(!isNavToggleActive);
    toggleElement(document.body);
  };

  const handleThemeToggleClick = () => {
    const newTheme = !isLightTheme;
    setLightTheme(newTheme);

    const themeToggleBtn = document.querySelector('[data-theme-btn]');
    if (themeToggleBtn) {
      toggleElement(themeToggleBtn);

      const theme = newTheme ? 'light_theme' : 'dark_theme';
      document.body.classList.toggle('light_theme', newTheme);
      document.body.classList.toggle('dark_theme', !newTheme);
      localStorage.setItem('theme', theme);
    }
  };

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    const googleFrame = document.querySelector('iframe.goog-te-menu-frame');
    if (googleFrame) {
      const googleFrameDocument = googleFrame.contentDocument || googleFrame.contentWindow.document;
      const googleMenu = googleFrameDocument.querySelector('.goog-te-menu2-item span.text:contains("' + language + '")');
      if (googleMenu) {
        googleMenu.click();
      }
    }
  };

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#">Fey<span>Licks</span></a>
        </h1>
        <div className="navbar-actions">
          <label htmlFor="lang" className="sr-only">Select Language:</label>
          <select name="language" id="lang" onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
          <button
            className="theme-btn"
            aria-label="Change Theme"
            title="Change Theme"
            data-theme-btn
            onClick={handleThemeToggleClick}
          >
            <span className={`icon ${isLightTheme ? 'active' : ''}`}></span>
          </button>
        </div>
        <button
          className="nav-toggle-btn"
          aria-label="Toggle Menu"
          title="Toggle Menu"
          data-nav-toggle-btn
          onClick={handleNavToggleClick}
        >
          <span className={`one ${isNavToggleActive ? 'active' : ''}`}></span>
          <span className={`two ${isNavToggleActive ? 'active' : ''}`}></span>
          <span className={`three ${isNavToggleActive ? 'active' : ''}`}></span>
        </button>
        <nav className={`navbar ${isNavToggleActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link">Home</a></li>
            <li><a href="#about" className="navbar-link">About</a></li>
            <li><a href="#skills" className="navbar-link">Skills</a></li>
            <li><a href="#portfolio" className="navbar-link">Portfolio</a></li>
            <li><a href="#contact" className="navbar-link">Contact</a></li>
          </ul>
        </nav>
        <div id="google_translate_element" style={{ display: 'none' }}></div>
      </div>
    </header>
  );
}

export default Header;
