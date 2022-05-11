import React from 'react';
import { Box, Typography } from '@mui/material';

export const About = () => {

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
    <Typography
          variant="h6"
          component="h2" 
          sx={ styles.layout }>
          About Me
        </Typography>
     <Box sx={ styles.layout }>
        <Typography variant="body1" component="p" sx={{ maxWidth: '65%' }}>
          I am a writer, software engineer, and (mediocre) artist living in Colorado with
          my wife Lacey, and out dogs, cats, and other critters.
        </Typography>
      </Box>
    </>
  );
};
