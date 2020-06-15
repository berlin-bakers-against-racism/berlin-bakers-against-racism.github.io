import React, { useContext } from "react";

import { Field } from "formik";
import { TextField } from 'formik-material-ui';
import { Grid, Typography } from "@material-ui/core";

const DonorInfo: React.FC = () => {
  return (
    <Grid item container xs={12} spacing={6}>
      <Grid item xs={12}>
      <Typography variant="h4" component="h2">
          Contact info
        </Typography>
        <Typography variant="body1">
          Tell us who you are and how you will receive your items.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Field
          component={TextField}
          name="fullName"
          label="Name*"
          fullWidth
          helperText="First and last name"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Field
          component={TextField}
          name="emailAddress"
          type="email"
          fullWidth
          label="Email address*"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Field
          component={TextField}
          name="phoneNumber"
          label="Phone number"
          type="tel"
          fullWidth
          helperText="In case we are having trouble making the delivery"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Field
          component={TextField}
          name="specialInstructions"
          label="Special delivery instructions"
          multiline
          fullWidth
          maxLength={200}
          rowsMax={4}
          helperText="For example: Etage; Hinterhof."
        />
      </Grid>
    </Grid>
  );
};

export default DonorInfo;