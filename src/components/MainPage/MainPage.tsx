import React from 'react';
import { Box, Typography } from '@mui/material';

export const MainPage = () => {

  const styles = {
    layout: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px'
    }
  };

  return (
  <>
    <Typography variant="h6" component="h2" sx={ styles.layout }>Welcome!</Typography>
    <Box sx={ styles.layout }>
      <Typography variant="body1" component="p" sx={{ maxWidth: '65%' }}>
        This is a simple website I threw together a few days ago in order have an anchor
        point for my email, and to have a jumping off point for later work.
      </Typography>
      <Typography variant="body1" component="p" sx={{ maxWidth: '65%' }}>
        I will be building upon it over the next little bit here, stay tuned!
      </Typography>
    </Box>
  </>);
};
