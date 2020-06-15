import React from 'react';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid  } from '@material-ui/core';

import { AppContext } from "../context/AppState";

import validate from "./validation";
import DonorInfo from "./DonorInfo";
import Menu from "./Menu";
import Summary from "./Summary";
import Fulfillment from "./Fullfillment"
import { Donor, OrderResponse } from '../context/domain';

const initialValues: Donor = {
  emailAddress: "",
  fullName: "",
  phoneNumber: "",
  address: "",
  specialInstructions: "",
};

const OrderForm: React.FC<{ onSubmit: (donor: Donor) => Promise<OrderResponse>}> = ({ onSubmit }) => {
  
  const { state } = React.useContext(AppContext);

  const onValidate = (donor: Donor) => {
    return validate({donor, cart: state.cart});
  };

  const submit = async (donor: Donor, { setSubmitting }: any) => {
    console.log("Submit from order page", donor);
    try {
      const response = await onSubmit(donor);
      console.log("Submit complete in orders", response); 
      if (response.message) {
        // TODO
      }    
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={onValidate}
      onSubmit={submit}
    >
      {({ submitForm, isSubmitting }) => (
        <Grid container>
          <Form>
            <Menu />
            <br />
            <DonorInfo />
            <br />
            <Fulfillment />
            <br />
            <Summary />
            <Grid item xs={12}>
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >Submit order</Button>
            </Grid>
          </Form>
        </Grid>
      )}
    </Formik>
  );
};

export default OrderForm;