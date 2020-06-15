import React, { useContext } from "react";

import { AppContext } from "../context/AppState";
import { submitOrder } from "../gateway/GoogleData";

import Layout from "../components/layout";
import SEO from "../components/seo";

import OrderForm from "../components/OrderForm";
import SuccessPage from "./success";
import { Donor, OrderResponse, ActionType } from "../context/domain";


const IndexPage = () => {
  const { state, dispatch } = React.useContext(AppContext);

  const submit = async (donor: Donor): Promise<OrderResponse> => {
    console.log("submitting");
    try {
      dispatch({ type: ActionType.PlaceOrder });
      const response = await submitOrder({ donor, cart: state.cart });
      dispatch({ type: ActionType.OrderPlaced, response });
      return response;
    } catch (e) {
      const response = { isSuccess: false, message: "Oops... there was an error taking your order. Please try again." };
      dispatch({ type: ActionType.OrderPlaced, response });
      return response;
    }
  };

  let page;
  if (state.status.orderSuccess) {
    page = <SuccessPage />;
  } else {
    page = <OrderForm onSubmit={submit} />
  }

  return (
    <Layout>
      <SEO title="Berlin Bakers Against Racism" />
      {page}
    </Layout>
  );
};

export default IndexPage;
