import React, { useState, useEffect } from "react";
import "./style.css";
import hdr from '../../images/checkout/img-2.svg'

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src={hdr}
        alt="Donate to J2J!"
      />
      <div className="description">
      <h3>Donate to Us!</h3>
      <h5>$5.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}

