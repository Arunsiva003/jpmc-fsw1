import React, { useState } from 'react';
import './Donate.css';
import course15 from "../../images/bhumi12.jpg"; // Replace with actual path
import course16 from "../../images/bhumi14.jpg"; // Replace with actual path
import course17 from "../../images/bhumi15.jpg"; // Replace with actual path
import course18 from "../../images/bhumi23.jpg"; // Replace with actual path
import course19 from "../../images/bhumi22.jpg"; // Replace with actual path
import course20 from "../../images/bhumi21.jpg"; // Replace with actual path


const DonationPage = () => {
  const [donationDetails, setDonationDetails] = useState({
    name: '',
    email: '',
    amount: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the payment page with the donation details
    window.location.href = `/payment?name=${encodeURIComponent(donationDetails.name)}&email=${encodeURIComponent(donationDetails.email)}&amount=${encodeURIComponent(donationDetails.amount)}`;
  };

  const handleChange = (event) => {
    setDonationDetails({
     ...donationDetails,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="donation-page">
      <section className="donation-details">
        <h2>Support Bhumi NGO</h2>
        <p>Every donation makes a difference in the lives of underprivileged children. Your contribution helps us provide quality education and support to those who need it most.</p>
        <p>Donate today and join us in making a positive impact on our community.</p>
      </section>
      <a href="/stories" className="see-what-weve-done-btn">See what we've done</a>
      <section className="payment-section">
        <form onSubmit={handleSubmit} className="donation-form">
          <input type="hidden" name="donation_amount" value="100" /> {/* Example donation amount */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleChange} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" min="0" step="0.01" onChange={handleChange} required />
          <button type="submit">Donate Now</button>
        </form>
      </section>
      <section className="image-grid">
        <img src={course15} alt="Image 1" />
        <img src={course16} alt="Image 2" />
        <img src={course19} alt="Image 3" />
        <img src={course18} alt="Image 4" />
      </section>
    </div>
  );
};

export default DonationPage;
