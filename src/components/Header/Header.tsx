import React from 'react';
import {
  Box, 
  Typography, 
  List, 
  ListItem, 
  styled,
} from '@mui/material';
import type { LinkProps } from "react-router-dom";
import {
  Link,
  useMatch,
  useResolvedPath
} from 'react-router-dom';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ 
          color: match ?  '#000' : '#eee' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export const Header = () => {
  const StyledLink = styled(CustomLink)(() => ({
    color: '#eee',
    textDecoration: 'none',
    ':hover': {
      color: '#000'
    },
  }));

  const styles = {
    headerBar: {
      width: '100%',
      height: '65px',
      backgroundColor: '#777',
      boxShadow: '2px 2px 2px',
      position: 'sticky',
      top: 0,
      display: 'flex',
      alignItems: 'center',
      color: '#eee',
      justifyContent: 'space-between',
    },
    listStyle: {
      display: 'flex', 
      justifyContent: 'end',
      alignItems: 'center',
      marginRight: '12px'
    }, name: {
      justifyContent: 'start',
      alignItems: 'center',
      margin: '12px',
      marginRight: 'auto',
      color: '#000'
    },
  }

  return (
  <>
    <Box sx={ styles.headerBar } >
      <StyledLink 
        to="/"
      >
        <Typography
          variant="h5"
          component="h1" 
          sx={ styles.name }>
          James Armbrust
        </Typography>
      </StyledLink>  
      <List sx={ styles.listStyle }>
        <ListItem>
          <StyledLink to="/misc">Misc</StyledLink>  
        </ListItem>
        <ListItem>
          <StyledLink to="/projects">Projects</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/about">About</StyledLink>
        </ListItem>
      </List>
    </Box>
  </>);
};
