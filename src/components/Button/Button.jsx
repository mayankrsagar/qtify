import './Button.module.css';

import React from 'react';

import {
  ReactComponent as SearchIcon,
} from '../../assets/Search icon.svg';  // Import the SVG as a React component

const Button = ({ children }) => {
  return (
    <button className="button">
      <SearchIcon />  
      {children}
    </button>
  );
}

export default Button;
