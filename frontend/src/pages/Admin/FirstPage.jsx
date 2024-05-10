// NavigationButtons.js
import React from 'react';
import './FirstPage.css';

function NavigationButtons() {
  return (
    <div className="navigation-buttons">
      <a href="admin/programs" className="navigation-button">Programs</a>
      <a href="admin/volunteers" className="navigation-button">Volunteers</a>
      <a href="admin/donations" className="navigation-button">Donations</a>
    </div>
  );
}

export default NavigationButtons;
