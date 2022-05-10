import React from 'react';
import { Box, Typography } from '@mui/material';

export const Contact = () => {
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
          How to contact me, if you were so inclined... will go here.
        </Typography>
      </Box>
    </>
  );
};
