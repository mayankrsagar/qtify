// components/LeftButton.js
import React from 'react';

import { Box } from '@mui/material';

import leftButton from '../../assets/leftButton.png';

const LeftButton = () => {
  return (
    <Box
      className="custom-prev"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
      }}
    >
      <img src={leftButton} alt="Previous" />
    </Box>
  );
};

export default LeftButton;
