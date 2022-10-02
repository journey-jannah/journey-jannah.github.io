const stripe = require('stripe')('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');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://myj2j.org';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1LoV0lELUcUGBgkRIpu7lgdK',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on the official Journey to Jannah Website!'));