// components/RightButton.js
import React from 'react';

import { Box } from '@mui/material';

import rightButton from '../../assets/rightButton.png';

const RightButton = () => {
  return (
    <Box
      className="custom-next"
      sx={{
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
      }}
    >
      <img src={rightButton} alt="Next" />
    </Box>
  );
};

export default RightButton;
