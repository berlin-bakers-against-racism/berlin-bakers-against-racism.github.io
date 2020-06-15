import React from "react";

import { Grid, Typography, Card, CardContent, CardHeader, Avatar } from "@material-ui/core";
import { Cart } from "../context/domain";
import { makeStyles } from '@material-ui/core/styles';
import RedeemIcon from '@material-ui/icons/Redeem';

const currencyFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const useStyles = makeStyles({
  card: { width: "80%" },
});

const Summary: React.FC<{ cart: Cart }> = ({ cart }) => {
  const summaryItems = cart.items.map((item) => (
    <span key={item.bakedGood.id}>
      <Grid item xs={12}>
        <Typography>
          {item.bakedGood.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="right">
          {item.quantity} @ {currencyFormatter.format(item.bakedGood.price!!)} ea.
        </Typography>
      </Grid>
    </span>
  ));

  const classes = useStyles();

  return (
    <Grid container item justify="center" xs={12} spacing={0}>
      <Card className={classes.card} raised={true} >
        <CardHeader title="Summary" action={
          <RedeemIcon color="primary" fontSize="large" />
        } titleTypographyProps={{ variant:"h4"}}>
        </CardHeader>
        <CardContent>
          {summaryItems}
          {cart.deliveryFee != 0 &&
            <>
              <Grid item xs={12}>
                <Typography>
                  Delivery fee
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align="right">
                  {currencyFormatter.format(cart.deliveryFee)}
                </Typography>
              </Grid>
            </>
          }
          <Grid item xs={12}>
            <Typography>
              <b>Donation amount</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="right">
              <b>{currencyFormatter.format(cart.totalAmount)}</b>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Summary;