
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Appointment = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Appointment booked for ${name} with mobile number: ${mobileNumber} and email: ${email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div 
        className="bg-white p-4 shadow-sm" 
        style={{
          width: '400px', 
          borderRadius: '12px', 
          border: '1px solid #ddd' // Adding border to the container
        }}
      >
        
        {/* Book Appointment button-like title with yellow background */}
        <Button
          variant="contained"
          style={{
            backgroundColor: '#CBA35C', // Yellow color for Book Appointment
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '8px',
            width: '100%',
            borderRadius: '10px',
            marginBottom: '20px', // Space below the title
          }}
          onClick={handleSubmit}
        >
          Book Appointment
        </Button>
        
        <div className="mb-1">
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleNameChange}
            className="mb-1"
            style={{ fontSize: '5px', borderRadius: '8px' }}
          />
        </div>

        <div className="mb-1">
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="mb-1"
            style={{ fontSize: '10px', borderRadius: '8px' }}
          />
        </div>

        <div className="mb-1">
          <TextField
            label="Email ID"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            className="mb-1"
            style={{ fontSize: '10px', borderRadius: '8px' }}
          />
        </div>

        {/* Book Now Button with green color */}
        <Button
          variant="contained"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '8px',
            width: '100%'  // Make it full width
          }}
          onClick={handleSubmit}
          fullWidth
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Appointment;


