import React, { useContext } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import OrderForm from "../components/OrderForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Berlin Bakers Against Racism" />
    <OrderForm />
  </Layout>
);

export default IndexPage;
