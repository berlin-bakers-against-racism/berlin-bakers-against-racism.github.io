import React from "react";

import { Grid, Typography, Link } from "@material-ui/core";

const SuccessPage: React.FC = () => {
  return (
      <Grid item xs={12}>
      <Typography variant="h4" component="h2">
          Thank you for your order!
        </Typography>
        <br/>
        <Typography paragraph>
          Next steps:
        </Typography>
        <Typography component={'span'}>
          <ol>
            <li>Check your email for confirmation of your order.</li>
            <li>Send your payment to our <Link href="https://www.paypal.me/berlinbakers?locale.x=en_US" target="_blank" rel="noreferrer">PayPal.me account</Link>.</li>
            <li>Receive a confirmation email from us with more details on your pickup or delivery.</li>
            <li>On Saturday, 20 June, 2020, your items will be fresh-baked and ready for you.</li>
            <li>All proceeds will be donated on Sunday, 21 June, 2020.</li>
          </ol>
        </Typography>
      </Grid>
  );
};

export default SuccessPage;