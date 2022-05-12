import React from 'react';
import { Box, Typography } from '@mui/material';

export const MiscPage = () => {

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
          Stuff
        </Typography>
     <Box sx={ styles.layout }>
        <Typography variant="body1" component="p" sx={{ maxWidth: '65%' }}>
          Lots of stuff will eventually go here... and if you are very lucky,
          some if it may even be interesting!!
        </Typography>
      </Box>
    </>
  );
};
