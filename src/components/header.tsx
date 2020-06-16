import { Link } from "gatsby";
import React from "react";
import Container from "@material-ui/core/Container";

type HeaderProps =  {
  siteTitle?: string
};

const Header = ({ siteTitle = '' }: HeaderProps) => (
  <header
    style={{
      color: 'white',
      background: '#ff3569', // #ff358b
      marginBottom: '2vw',
    }}
  >
    <Container maxWidth="md" style={{ paddingTop: '6vw', paddingBottom: '2vw' }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
);

export default Header;
