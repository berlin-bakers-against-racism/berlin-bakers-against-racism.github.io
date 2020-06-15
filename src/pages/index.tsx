import React, { useContext } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { AppContext, AppState } from "../context/AppState";
import { Grid, TextField, Button } from "@material-ui/core";
import { ActionType } from "../context/domain";
import OrderForm from "../components/OrderForm";

const IndexPage = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Order form</h1>
        </Grid>
        <OrderForm />
      </Grid>
    </Layout>
  );
};

export default IndexPage;
