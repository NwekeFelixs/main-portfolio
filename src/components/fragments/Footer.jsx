import React from 'react';
import '../css/style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="h1 logo">
          <a href="#">
            Fey<span>licks</span>
          </a>
        </p>
        <p className="copyright">
          &copy; 2022 <a href="#">feylicks</a>. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
