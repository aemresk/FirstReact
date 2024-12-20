import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', gap: 10}}>
          <Button color="inherit" component={Link} to="/" sx={{ fontSize: '1.2rem' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ fontSize: '1.2rem' }}>
            About
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
