import React from "react";

import { AppContext } from "../context/AppState";
import { Grid, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab"
import { CartItem } from "../context/domain";

const currencyFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const SummaryItem: React.FC<{ item: CartItem, index: number }> = ({ item, index }) => (
  <Grid item container xs={12}>
    <Grid item xs={6}>
      <Typography>
        {index+1}. {item.bakedGood.name}
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
  const { cart, validation } = state;

  const summaryItems = cart.items.map((item, index) => (
    <SummaryItem item={item} index={index} key={item.bakedGood.id} />
  ));

  const alerts = validation.generalErrors.map(err => (<Alert severity="error" key={err}>{err}</Alert>));

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Summary
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {alerts}
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