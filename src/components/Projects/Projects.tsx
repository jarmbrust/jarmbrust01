import React from 'react';
import { Box, Typography } from '@mui/material';

export const Projects = () => {

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
     <Box sx={ styles.layout }>
        <Typography sx={{ maxWidth: '65%' }}>
          Projects I am working on will be listed here...
        </Typography>
      </Box>
    </>
  );
};