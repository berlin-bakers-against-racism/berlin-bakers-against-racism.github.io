import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const SaleOver = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" style={{ textAlign: "center" }}>Dankeschön, Berlin!</Typography>
          <Typography variant="subtitle1" style={{ textAlign: "right" }}>17 June 2020 @ 22h</Typography>
          <br />
          <Typography variant="body1" component="span">
            <p>
              Our virtual bake sale fundraiser is now closed!
            </p>
            <p>
              Together with 20+ bakers in the city, Berlin Bakers Against Racism hosted a bake sale to raise funds to fight against systemic racism. 100% proceeds donated to
              &nbsp;<Link href="https://eji.org/" target="_blank" rel="noopener">Equal Justice Initiative</Link>
              &nbsp;and
              &nbsp;<Link href="https://kop-berlin.de/" target="_blank" rel="noopener">KOP-Berlin</Link>.
            </p>
            <p>
              Bakers Against Racism is a great initiative that started in the US by
              &nbsp;<Link href="https://www.instagram.com/smallorchids" target="_blank" rel="noopener">@smallorchids</Link>
              &nbsp;<Link href="https://www.instagram.com/badwolf_88" target="_blank" rel="noopener">@badwolf_88</Link>
              &nbsp;&amp;&nbsp;
              <Link href="https://www.instagram.com/robrubba" target="_blank" rel="noopener">@robrubba</Link>&nbsp;
              to fight for justice. Their initiative fired up in 15 countries worldwide including here in Berlin.
            </p>
            <p>
              Thank you Berliners for your orders, messages, sharing our posts, and support. WE DID IT!!!
            </p>
            <p>
              We’re currently working on sending out confirmations and organizing logistics for Saturday delivery.
            </p>
            <p>
              If you have ordered and paid, you can now wait impatiently for Saturday!:)
            </p>
            <p>
              If you have ordered, but haven’t paid yet, please do so by 9am on 18 June (tomorrow) using
              our <Link href="https://www.paypal.me/berlinbakers" target="_blank" rel="noreferrer">PayPal.me account</Link>.
              Your order will be automatically cancelled if we don’t receive the payment by then.
            </p>
            <p>
              We’ll announce the total proceeds raised on Sunday, 21 June.
            </p>
            <p>
              Thank you!<br />
              Berlin Bakers Against Racism<br />
              <Link href="mailto:berlinbakersagainstracism+gh@gmail.com" target="_blank" rel="noopener">
                <MailOutlineIcon fontSize="large" style={{ verticalAlign: "middle" }} />
                Berlin Bakers
              </Link><br />
              <Link href="https://www.instagram.com/berlinbakersagainstracism" target="_blank" rel="noopener">
                <InstagramIcon fontSize="large" style={{ verticalAlign: "middle" }} />
                @berlinbakersagainstracism
              </Link>
            </p>
            <p>
              P.S. You can keep an eye on our Instagram account for what comes next. :-)
            </p>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default SaleOver;