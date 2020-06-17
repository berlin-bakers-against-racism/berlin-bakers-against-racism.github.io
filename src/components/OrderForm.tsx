import React from 'react';
import { Button, LinearProgress, Grid, Typography, Link } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Alert } from '@material-ui/lab';
import { Formik, Form } from 'formik';
import * as Yup from "yup";

import DonorInfo from "./DonorInfo";
import Menu from "./Menu";
import Summary from "./Summary";
import Fulfillment from "./Fullfillment"
import { Donor, OrderResponse, FulfillmentOption } from '../context/domain';
import { AppContext } from '../context/AppState';

const initialValues = {
  emailAddress: "",
  fullName: "",
  phoneNumber: "",
  address: "",
  specialInstructions: "",
};

const OrderForm: React.FC<{ onSubmit: (donor: Donor) => Promise<OrderResponse> }> = ({ onSubmit }) => {
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
          <Grid item xs={12}>
            <Typography variant="body1" component="span">
              <p>Hi Berliners!</p>
              <p>
                Together with 20+ bakers in the city, Berlin Bakers Against Racism is hosting a bake sale
              to raise funds to fight against systemic racism. 100% proceeds donated to
                &nbsp;<Link href="https://eji.org/" target="_blank" rel="noopener">Equal Justice Initiative</Link> and
                &nbsp;<Link href="https://kop-berlin.de/" target="_blank" rel="noopener">KOP-Berlin</Link>.
              </p>
              <p>
                Bake sale is now open and taking orders until end-of-day Wednesday 17. June. Contribute to the fight for justice
                AND satisfy your sweet tooth! Limited goods available - so hurry before they’re gone!
              </p>
              <p>
                Bakers Against Racism is an initiative started in the US by
                &nbsp;<Link href="https://www.instagram.com/smallorchids" target="_blank" rel="noopener">@smallorchids</Link>
                &nbsp;<Link href="https://www.instagram.com/badwolf_88" target="_blank" rel="noopener">@badwolf_88</Link>
                &nbsp;&amp;&nbsp;
                <Link href="https://www.instagram.com/robrubba" target="_blank" rel="noopener">@robrubba</Link>&nbsp;
                to fight for justice. Their initiative is now in 15 countries world-wide including here in Berlin!
              </p>
            </Typography>
            <Typography variant="body1">
              <Link href="https://www.instagram.com/berlinbakersagainstracism" target="_blank" rel="noopener">
                <InstagramIcon fontSize="large" style={{ verticalAlign: "middle" }} />
                @berlinbakersagainstracism
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link href="https://www.instagram.com/bakrsagainstracism" target="_blank" rel="noopener">
                <InstagramIcon fontSize="large" style={{ verticalAlign: "middle" }} />
                @bakersagainstracism
              </Link>
            </Typography>
            <br />
            <Typography variant="body1">
              &nbsp;<Link href="https://www.instagram.com/explore/tags/bakersagainstracism" target="_blank" rel="noopener">#bakersagainstracism</Link>
              &nbsp;<Link href="https://www.instagram.com/explore/tags/berlinbakersagainstracism" target="_blank" rel="noopener">#berlinbakersagainstracism</Link>
              &nbsp;<Link href="https://www.instagram.com/explore/tags/blacklivesmatter" target="_blank" rel="noopener">#blacklivesmatter</Link>
              &nbsp;<Link href="https://www.instagram.com/explore/tags/blacklivesmatterberlin" target="_blank" rel="noopener">#blacklivesmatterberlin</Link>
              &nbsp;<Link href="https://www.instagram.com/explore/tags/blmberlin" target="_blank" rel="noopener">#blmberlin</Link>
            </Typography>
            <br />
          </Grid>
          <Form>
            <Menu />
            <br />
            <DonorInfo />
            <br />
            <Fulfillment />
            <br />
            <Grid item xs={12}>
              {alerts}
            </Grid>
            <br />
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
