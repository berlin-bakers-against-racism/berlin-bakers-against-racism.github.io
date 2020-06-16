import React, { useContext } from "react";
import { Grid, Typography, Card, CardContent, CardHeader, CardActions, Tooltip, TextField, Link } from "@material-ui/core";

import { AppContext } from "../context/AppState";
import { BakedGood, ActionType } from "../context/domain";
import getIconForCategory from "./Icons";

type MenuItemProps = {
  bakedGood: BakedGood
};

const currencyFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

const addInstagramLink = (text?: string) => {
  if (!text) return text;

  const parts = text.split(/ @([^ ]+)/);
  if (parts.length === 1) return text;

  return (
  <>
    {parts[0]}
    &nbsp;<Link href={"https://www.instagram.com/" + parts[1]} target="_blank" rel="noopener">@{parts[1]}</Link>&nbsp;
    {parts.length > 2 && parts[2]}
    {parts.length > 3 && ( <Link href={"https://www.instagram.com/" + parts[3]} target="_blank" rel="noopener">@{parts[3]}</Link> )}
    {parts.length > 4 && parts[4]}
  </>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ bakedGood }) => {
  const { dispatch } = useContext(AppContext)

  const updateCart = (quantityText: string) => {
    let quantity = parseFloat(quantityText);
    if (isNaN(quantity)) quantity = 0;
    dispatch({ type: ActionType.ChangeItemQuantity, item: bakedGood, quantity});
  };

  let icon = getIconForCategory(bakedGood.category);

  return (
    <Grid item xs={12}>
      <Card raised={true}>
        <CardHeader title={bakedGood.name} action={icon}/>
        <CardContent>
          <Typography paragraph>
            {addInstagramLink(bakedGood.description)}
          </Typography>
          <Typography variant="body2" align="right">
            {bakedGood.countRemaining} of {bakedGood.maxAmount} still available
          </Typography>
        </CardContent>
        <CardActions>
          <TextField
            label="Quantity"
            type="number"
            onChange={e => updateCart(e.target.value)}
            />
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

  const bakedGoods = state.menu.items.filter(item => item.isAvailable && item.countRemaining && item.countRemaining!! > 0 && item.price)
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
          Choose some of our delicious creations to receive with your donation. Baked goods will be available on 20. June for
          10:30h-16h pick-up (in Kreuzberg or Prenzlauer Berg) or 11h-15h delivery.
        </Typography>
      </Grid>
      {bakedGoods}
    </Grid>
  );
};

export default Menu;
