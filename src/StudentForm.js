import React, { useState } from 'react';
import './StudentForm.css'; // Import CSS file

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !email || !phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }
    // Call onSubmit prop with form data
    onSubmit({ name, email, phoneNumber });
    // Clear form fields
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  );
};

export default StudentForm;
