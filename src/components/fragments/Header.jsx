import React, { useState, useEffect } from 'react';
import '../css/style.css';

function Header() {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [isNavToggleActive, setNavToggleActive] = useState(false);
  const [isLightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      setHeaderActive(window.scrollY >= 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleElement = (elem) => {
    elem.classList.toggle("active");
  };

  const handleNavToggleClick = () => {
    setNavToggleActive(!isNavToggleActive);
    toggleElement(document.body);
  };

  const handleThemeToggleClick = () => {
    setLightTheme(!isLightTheme);

    // Query the button element with the data-theme-btn attribute
    const themeToggleBtn = document.querySelector("[data-theme-btn]");

    if (themeToggleBtn) {
      toggleElement(themeToggleBtn);

      const theme = isLightTheme ? "light_theme" : "dark_theme";
      document.body.classList.toggle("light_theme", isLightTheme);
      document.body.classList.toggle("dark_theme", !isLightTheme);
      localStorage.setItem("theme", theme);
    }
  };

  useEffect(() => {
    // Check and apply the last selected theme from localStorage
    const theme = localStorage.getItem("theme");
    if (theme === "light_theme") {
      setLightTheme(true);
      document.body.classList.add("light_theme");
    } else {
      setLightTheme(false);
      document.body.classList.add("dark_theme");
    }
  }, []);

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#">Fey<span>Licks</span></a>
        </h1>
        <div className="navbar-actions">
          <select name="language" id="lang">
            <option value="en">En</option>
            <option value="ar">Ar</option>
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
            <li>
              <a href="#home" className="navbar-link">Home.</a>
            </li>
            <li>
              <a href='#about' className="navbar-link">About.</a>
            </li>
            <li>
              <a href ='#skills' className="navbar-link">Skills.</a>
            </li>
            <li>
              <a href="#portfolio" className="navbar-link">Portfolio.</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">Contact.</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
