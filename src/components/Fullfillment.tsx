import React from "react";
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Grid, Typography, TextField } from "@material-ui/core";
import { Field } from "formik";

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
        </FormControl>
      </Grid>
      { fulfillment === FulfillmentOption.DropOff &&
      <Grid item xs={12} md={6}>
        <Field
          component={TextField}
          name="address"
          label="Address*"
          fullWidth
          helperText="House number and street in Berlin"
        />
      </Grid>}
    </Grid>
  );
};

export default delivery;