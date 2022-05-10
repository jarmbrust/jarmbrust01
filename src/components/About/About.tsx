import React from 'react';
import { Box, Typography } from '@mui/material';

export const About = () => {
  return (
    <>
     <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px'
        }}
      >
        <Typography sx={{ maxWidth: '65%' }}>
          I will put more about me here...
        </Typography>
      </Box>
    </>
  );
};
