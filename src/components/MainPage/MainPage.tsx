import React from 'react';
import { Box, Typography } from '@mui/material';

export const MainPage = () => {

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
      <Typography variant="body1" component="h2">Greetings!</Typography>
      <Typography sx={{ maxWidth: '65%' }}>
        This is a simple website I&#39;ve thrown together to have an anchor
        point for my email, and to have a jumping off point for later work.
      </Typography>
    </Box>
  </>);
};
