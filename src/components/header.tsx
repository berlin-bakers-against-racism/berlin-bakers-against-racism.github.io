import React from "react";
import { Container, Typography } from '@material-ui/core';
import { Link } from "gatsby-theme-material-ui";

type HeaderProps =  {
  siteTitle?: string
};

const Header = ({ siteTitle = '' }: HeaderProps) => (
  <header
    style={{
      color: 'white',
      background: '#663399', // #ff358b
      marginBottom: '2vw',
    }}
  >
    <Container maxWidth="md" style={{ paddingTop: '5vw', paddingBottom: '1vw' }}>
      <Typography variant="h4" component="p" gutterBottom>
        <Link to="/" color="inherit" underline="none">
          {siteTitle}
        </Link>
      </Typography>
    </Container>
  </header>
);

export default Header;
