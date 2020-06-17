/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "@material-ui/core/Container";

import Header from "./header";
import "./layout.css";
import { Typography } from "@material-ui/core";

type LayoutProps = {
  children: ReactNode
};

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container maxWidth="md">
        <main>{children}</main>
        <footer>
          <Typography variant="caption">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

export default Layout;
