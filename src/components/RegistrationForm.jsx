import { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted", formData);
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      {submitted && <p className="success">Registration successful!</p>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
