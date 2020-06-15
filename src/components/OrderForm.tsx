import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Grid } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

interface Donor {
  emailAddress: string;
}

const initialValues = {
  emailAddress: "",
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

const onSubmit = (values: Donor, { setSubmitting }: any) => {
  setTimeout(() => {
    setSubmitting(false);
    alert(JSON.stringify(values, null, 2));
  }, 500);
};

const OrderForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container spacing={6}>
            <Grid item xs={12}>

              <Field
                component={TextField}
                name="emailAddress"
                type="email"
                label="Email address"
              />
            </Grid>
            <Grid item xs={12}>
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >Proceed to confirmation</Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;