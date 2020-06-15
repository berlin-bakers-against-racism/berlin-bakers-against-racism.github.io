import React from "react";

import { Grid, Typography, Link } from "@material-ui/core";
import { Donor, Cart, FulfillmentOption } from "../context/domain";
import Summary from "../components/Summary";

const currencyFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const SuccessPage: React.FC<{ donor: Donor, cart: Cart }> = ({ donor, cart }) => {
  let fulfillment;
  if (!cart) {
    fulfillment = "pickup or delivery";
  } else {
    if (cart.fulfillment === FulfillmentOption.DropOff) {
      fulfillment = "delivery";
    } else {
      fulfillment = "pickup";
    }
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Thank you{donor?.fullName && ", " + donor.fullName + ", "} for your contribution!
        </Typography>
      </Grid>
      <br/>
      <Summary cart={cart} />
      <br />
      <Grid item xs={12}>
        <Typography paragraph>
          Next steps:
        </Typography>
        <Typography component={'span'}>
          <ol>
            {/* <li>Check your email for confirmation of your order.</li> */}
            <li>Send your {cart?.totalAmount && currencyFormatter.format(cart.totalAmount)} payment to our <Link
              href={"https://www.paypal.me/berlinbakers/" + (cart?.totalAmount && (cart.totalAmount + "EUR"))} target="_blank" rel="noreferrer">PayPal.me account</Link>.</li>
            <li>Receive a confirmation email from us with more details on your {fulfillment}.</li>
            <li>On Saturday, 20 June, 2020, your items will be fresh-baked and ready for you.</li>
            <li>All proceeds will be donated on Sunday, 21 June, 2020.</li>
          </ol>
        </Typography>
      </Grid>
    </>
  );
};

export default SuccessPage;