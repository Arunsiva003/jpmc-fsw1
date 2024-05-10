import React, { useEffect, useState } from 'react';
import './Payment.css';

class PaymentForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="payment-form__line"></div>
        <div className="payment-form__field">
          <label htmlFor="name">Name on Credit Card</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="payment-form__field">
          <label htmlFor="card">Credit Card Number</label>
          <input type="text" id="card" name="card" placeholder="1234 5678 9012 3456" pattern="\d{4} \d{4} \d{4} \d{4}" title="Please enter a valid credit card number" required />
        </div>
        <div className="payment-form__buttons">
          <button type="submit" className="payment-form__pay-complete">Pay & Complete</button>
          <button type="button" className="payment-form__back">Back</button>
        </div>
      </form>
    );
  }
}

const PaymentPage = () => {
  const [donationDetails, setDonationDetails] = useState({
    donarName: '',
    email: '',
    amount: '',
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setDonationDetails({
      name: urlParams.get('name'),
      email: urlParams.get('email'),
      amount: urlParams.get('amount'),
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert('Donation saved successfully:');
      //clear form
      document.getElementById("payment-form").reset();
      // Handle success, e.g., show a success message or redirect the user
    } catch (error) {
      console.error('There was a problem with your submission:', error);
      // Handle error, e.g., show an error message
    }

  };

  return (
    <div className="payment-page">
      <h2>Complete Your Donation</h2>
      <form onSubmit={handleSubmit} id="payment-form" className="payment-form">
        <div className="payment-form__line"></div>
        <div className="payment-form__field">
          <label htmlFor="name">Name on Credit Card</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="payment-form__field">
          <label htmlFor="card">Credit Card Number</label>
          <input type="text" id="card" name="card" placeholder="1234 5678 9012 3456" pattern="\d{4} \d{4} \d{4} \d{4}" title="Please enter a valid credit card number" required />
        </div>
        <div className="payment-form__field">
          <label htmlFor="card">Pin Number</label>
          <input type="text" id="card" name="card" placeholder="XXXXX" title="Please enter a valid Pin Number" required />
        </div>
        <div className="payment-form__buttons">
          <button type="submit" className="payment-form__pay-complete">Pay & Complete</button>
          <button type="button" className="payment-form__back">Back</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;