import React from 'react';
import '../css/style.css'
import { IoArrowUpOutline } from 'react-icons/io5';

function GoToTop() {
  return (
    <a href="#top" className="go-top" data-go-top title="Go to Top">
      <IoArrowUpOutline/>
    </a>
  );
}

export default GoToTop;
