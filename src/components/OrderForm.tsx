import React from 'react';
import { Formik, Form } from 'formik';
import { Button, LinearProgress, Grid  } from '@material-ui/core';
import * as Yup from "yup";

import { AppContext } from "../context/AppState";
import validate, { validateDonor } from './validation';

import DonorInfo from "./DonorInfo";
import Menu from "./Menu";
import Summary from "./Summary";
import Fulfillment from "./Fullfillment"
import { Donor, OrderResponse, FulfillmentOption } from '../context/domain';
import { Alert } from '@material-ui/lab';

const initialValues = {
  emailAddress: "",
  fullName: "",
  phoneNumber: "",
  address: "",
  specialInstructions: "",
};

const OrderForm: React.FC<{ onSubmit: (donor: Donor) => Promise<OrderResponse>}> = ({ onSubmit }) => {
  const { state } = React.useContext(AppContext);
  const { cart, validation } = state;

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too short')
      .max(200, 'Too long')
      .required('Required'),
    emailAddress: Yup.string()
      .min(5, 'Too short')
      .max(200, 'Too long')
      .email('Invalid email address')
      .required('Required'),
    address: Yup.string().required(() => cart.fulfillment === FulfillmentOption.DropOff ? 'Required' : null),
  });

  const submit = async (donor: Donor, { setSubmitting }: any) => {
    try {
      const response = await onSubmit(donor);
      if (response.message) {
        // TODO
      }    
    } finally {
      setSubmitting(false);
    }
  };

  const alerts = validation.generalErrors.map(err => (<Alert severity="error" key={err}>{err}</Alert>));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
            <br/>
            <Grid item xs={12}>
              {alerts}
            </Grid>
            <br/>
            <br />
            <Summary cart={cart} />
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