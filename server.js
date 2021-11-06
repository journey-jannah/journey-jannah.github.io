/*const stripe = require('stripe')('sk_test_51HSBYYELUcUGBgkRwsbKs2klhmUDDlXL6wDTq7uHB2eLebmojt7dJ1PQpcw2yVZ3zKI19sXbaTC4cX3VaS4m83lE00TBjxV7DH');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://myj2j.org';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: '{{5.00}}',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url)
});

app.listen(4242, () => console.log('Running on port 4242'));*/