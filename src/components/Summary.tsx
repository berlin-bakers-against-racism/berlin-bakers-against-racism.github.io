import React from "react";

import { AppContext } from "../context/AppState";
import { Grid, Typography } from "@material-ui/core";
import { CartItem } from "../context/domain";
import delivery from "./Fullfillment";

const currencyFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const SummaryItem: React.FC<{ item: CartItem }> = ({ item }) => (
  <Grid item container xs={12}>
    <Grid item xs={6}>
      <Typography>
        {item.bakedGood.name}
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography align="right">
        {item.quantity} @ {currencyFormatter.format(item.bakedGood.price!!)} ea.
      </Typography>
    </Grid>
  </Grid>
);

const Summary: React.FC = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const { cart } = state;

  const summaryItems = cart.items.map(item => (
    <SummaryItem item={item} key={item.bakedGood.id} />
  ));

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Summary
        </Typography>
      </Grid>
      {summaryItems}
      {cart.deliveryFee != 0 &&
        <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography>
            Delivery fee
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            {currencyFormatter.format(cart.deliveryFee)}
          </Typography>
        </Grid>
      </Grid>
      }
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <Typography>
            <b>Total amount</b>
        </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            <b>{currencyFormatter.format(cart.totalAmount)}</b>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;