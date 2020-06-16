import React from "react";
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Grid, FormHelperText, Typography } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from 'formik-material-ui';


import { AppContext } from "../context/AppState";
import { FulfillmentOption, ActionType } from "../context/domain";

const delivery: React.FC = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const { cart } = state;
  const { fulfillment } = cart;

  const handleChange = (e: any) => {
    dispatch({ type: ActionType.ChooseFulfillment, option: e.target.value});
  };

  return (
    <Grid item container>
      <Grid item xs={12} md={6}>
        <FormControl component="fieldset">
          <FormLabel component="legend">How would you like to receive your goodies?</FormLabel>
          <RadioGroup aria-label="fulfillment" name="fullfillment" value={fulfillment} onChange={handleChange}>
            <FormControlLabel value={FulfillmentOption.Pickup} control={<Radio />} label="Pick-up" />
            <FormControlLabel value={FulfillmentOption.DropOff} control={<Radio />} label="Delivery" />
          </RadioGroup>
          <FormHelperText>You can pick-up for free at one of our convenient locations. Or you can choose to have your goods delivered for a 5€ fee that will also be donated.</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
      { (fulfillment === FulfillmentOption.DropOff &&
        <Field
          component={TextField}
          name="address"
          label="Address*"
          fullWidth
          helperText="House number and street in Berlin"
        />) || (fulfillment === FulfillmentOption.Pickup &&
        <Typography variant="body2">Please let us know in the "Special instructions" if you would prefer to pick up at our location near Park Am Wasserturm in Prenzlauer Berg or our location near Görlitzer Bahnof in Kreuzberg.</Typography>)
        }</Grid>
    </Grid>
  );
};

export default delivery;