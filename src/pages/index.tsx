import React, { useContext } from "react";

import { AppContext } from "../context/AppState";
import { submitOrder } from "../gateway/GoogleData";
import validate from "../components/validation";

import Layout from "../components/layout";
import SEO from "../components/seo";

import OrderForm from "../components/OrderForm";
import SuccessPage from "../components/Success";
import { Donor, OrderResponse, ActionType } from "../context/domain";


const IndexPage = () => {
  const { state, dispatch } = React.useContext(AppContext);

  const submit = async (donor: Donor): Promise<OrderResponse> => {
    const { cart } = state;
    try {
      dispatch({type: ActionType.Validation, result: { donorErrors: {}, hasError: false, generalErrors: [] } });

      const validation = validate({donor, cart});
      dispatch({type: ActionType.Validation, result: validation });

      if (validation.hasError) {
        return { isSuccess: false, message: "Please review the errors above." };
      }
      
      dispatch({ type: ActionType.UpdateDonor, donor });

      dispatch({ type: ActionType.PlaceOrder });
      const response = await submitOrder({ donor, cart: state.cart });
      dispatch({ type: ActionType.OrderPlaced, response });
      return response;
    } catch (e) {
      const response = { isSuccess: false, message: "Oops... there was an error taking your order. Please try again.", donor, cart };
      dispatch({ type: ActionType.OrderPlaced, response });
      return response;
    }
  };

  let page;
  if (state.status.orderSuccess) {
    const { donor, cart } = state;
    page = <SuccessPage donor={donor} cart={cart} />;
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
