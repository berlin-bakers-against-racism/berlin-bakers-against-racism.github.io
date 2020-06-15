import React, { useContext } from "react";
import { Grid, Typography, Card, CardContent, CardHeader, CardActions, Tooltip, TextField } from "@material-ui/core";

import { AppContext } from "../context/AppState";
import { BakedGood, ActionType } from "../context/domain";

type MenuItemProps = {
  bakedGood: BakedGood
};

const currencyFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const MenuItem: React.FC<MenuItemProps> = ({ bakedGood }) => {
  const { state, dispatch } = useContext(AppContext)
  
  const updateCart = (quantityText: string) => {
    let quantity = parseFloat(quantityText);
    if (isNaN(quantity)) quantity = 0;
    dispatch({ type: ActionType.ChangeItemQuantity, item: bakedGood, quantity});
  };

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title={bakedGood.name} />
        <CardContent>
          <Typography paragraph>
            {bakedGood.description}
          </Typography>
          <Typography variant="body2" align="right">
            {bakedGood.countRemaining} of {bakedGood.maxAmount} still available
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="TODO Align right">
          <TextField
            label="Quantity"
            type="number"
            onChange={e => updateCart(e.target.value)}
            />
          </Tooltip>
          <Typography variant="body1">
            @ {currencyFormatter.format(bakedGood.price!!)} each
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Menu = () => {
  const { state } = useContext(AppContext);

  const bakedGoods = state.menu.items.filter(item => item.isAvailable && item.countRemaining && item.countRemaining!! > 0)
    .map(item => (
    <MenuItem bakedGood={item} key={item.id} />
  ));

  return (
    <Grid item container xs={12} spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Baked goods
        </Typography>
        <Typography variant="body1">
          Choose some of our delicious creations to receive with your donation. Baked goods will be available for pick-up or delivery on June 20th between 10:30-15:00. 
        </Typography>
      </Grid>
      {bakedGoods}
    </Grid>
  );
};

export default Menu;
