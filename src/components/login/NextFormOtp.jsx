import React, { useState, useEffect } from 'react';

const NextFormOtp = () => {
  const [otp, setOTP] = useState('');
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const handleOTPChange = (event) => {
    const inputOTP = event.target.value;
    setOTP(inputOTP);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Timer logic
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setIsTimerRunning(false);
            // Perform actions after timer ends (e.g., resend OTP functionality)
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  return (
    
        <form onSubmit={handleSubmit}>
          <div className="otp-input-container">
            
            <div id="inputs" class="inputs">
            <input className="input" type="text" inputMode="numeric" maxLength="1" />
            <input className="input" type="text" inputMode="numeric" maxLength="1" />
            <input className="input" type="text" inputMode="numeric" maxLength="1" />
            <input className="input" type="text" inputMode="numeric" maxLength="1" />
        </div>
          </div>
        <div className="timer">
          {isTimerRunning ? `OTP will expire with in ${timer} seconds` : 'Resend OTP'}
        </div>
          <button className="input-button" type="submit">
            Submit
          </button>
        </form>
     
  );
};

export default NextFormOtp;
