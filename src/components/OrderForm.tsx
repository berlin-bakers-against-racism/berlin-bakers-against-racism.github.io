import React from 'react';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid  } from '@material-ui/core';

import { AppContext } from "../context/AppState";
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

const validate = (values: Donor) => {
  const errors: Partial<Donor> = {};
  if (!values.emailAddress) {
    errors.emailAddress = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)
  ) {
    errors.emailAddress = 'Invalid email address';
  }
  return errors;
}

const OrderForm: React.FC<{ onSubmit: (donor: Donor) => Promise<OrderResponse>}> = ({ onSubmit }) => {
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
      validate={validate}
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