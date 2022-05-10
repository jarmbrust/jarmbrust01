import React from 'react';
import { Box, Typography } from '@mui/material';

export const Projects = () => {
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
          Projects I am working on will be listed here...
        </Typography>
      </Box>
    </>
  );
};