// src/VolunteerPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './volunteer.css';
import VolunteerImg from '../../images/volunteer.jpg';

const VolunteerPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  const volunteerData = {
    title: "Join Us and Make a Difference",
    description: "Become a volunteer and help us make a positive impact.",
    opportunities: [
      { title: "Teaching Support", description: "Help children with their studies." },
      { title: "Community Outreach", description: "Assist in community events and projects." },
      { title: "Healthcare Assistance", description: "Provide healthcare services to those in need." },
    ],
  };

  const onSubmit = async data => {
    try {
      console.log(data);
        const response = await fetch('http://localhost:8080/volunteers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log(responseData);
        alert("Thankyou for your interest. We will get back to you shortly.");
        //clear the form
        document.getElementById("volunteer-form").reset();
    } catch (error) {
        console.error('Error submitting volunteer form:', error);
    }
};

  return (
    <div className="volunteer-page">
      <header className="banner">
        <img src={VolunteerImg} alt="Volunteering Banner" />
        <h1>{volunteerData.title}</h1>
        <p>{volunteerData.description}</p>
      </header>
      <main className="opportunities">
        {volunteerData.opportunities.map((opportunity, index) => (
          <div key={index} className="opportunity">
            <h2>{opportunity.title}</h2>
            <p>{opportunity.description}</p>
          </div>
        ))}
      </main>
      <div className='volunteer-container'>
      <section className="volunteer-form">
        <h2>Sign Up to Volunteer</h2>
        <form id="volunteer-form" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="Name" />
          {errors.name && <span>This field is required</span>}
          <input {...register("email", { required: true })} placeholder="Email" />
          {errors.email && <span>This field is required</span>}
          <input {...register("mobileNumber", { required: true })} placeholder="Mobile Number" />
          {errors.mobileNumber && <span>This field is required</span>}
          <input {...register("location", { required: true })} placeholder="Location" />
          {errors.location && <span>This field is required</span>}
          <button type="submit">Submit</button>
        </form>
      </section>
      </div>
    </div>
  );
};

export default VolunteerPage;
