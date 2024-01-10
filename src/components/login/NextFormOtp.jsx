import React, { useState, useEffect } from 'react';

const NextFormOtp = ({phoneNumber}) => {
  const [otp, setOTP] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
  });
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [successfullLogin, setSuccessfullLogin] = useState(false);
// console.log(phoneNumber, otp)
  
  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;

    // Update the state for the respective OTP digit
    setOTP({
      ...otp,
      [fieldName]: value,
    });
  };
  // console.log(`${otp.digit1}${otp.digit2}${otp.digit3}${otp.digit4}`)
  const handleOtpSubmit = async (event) => {
    // console.log("phoneNumber", phoneNumber)
    event.preventDefault();
    try {
      const response = await fetch('https://dev.nxfin.in/api/uat.app/otpVerify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: phoneNumber,
          otp: `${otp.digit1}${otp.digit2}${otp.digit3}${otp.digit4}`
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response:', data);
      setSuccessfullLogin(data.status)
    } catch (error) {
      // setRequestError(error.message);
      console.error('There was a problem with the request:', error);
      setSuccessfullLogin(false)
    }
  };
  useEffect(()=>{
    handleOtpSubmit();
  }, [])

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
    <>
    {
      successfullLogin ? "login successfull" : (
        <form onSubmit={handleOtpSubmit}>
        <div className="otp-input-container">
          
          <div id="inputs" className="inputs">
          <input
          className="input"
          name="input1"
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={otp.digit1}
          onChange={(e) => handleInputChange(e, 'digit1')}
        />
        <input
          className="input"
          type="text"
          name="input2"
          inputMode="numeric"
          maxLength="1"
          value={otp.digit2}
          onChange={(e) => handleInputChange(e, 'digit2')}
        />
        <input
          className="input"
          type="text"
          name="input3"
          inputMode="numeric"
          maxLength="1"
          value={otp.digit3}
          onChange={(e) => handleInputChange(e, 'digit3')}
          />
        <input
          className="input"
          type="text"
          name="input4"
          inputMode="numeric"
          maxLength="1"
          value={otp.digit4}
          onChange={(e) => handleInputChange(e, 'digit4')}
          />
      </div>
        </div>
      <div className="timer">
        {isTimerRunning ? `OTP will expire with in ${timer} seconds` : 'Resend OTP'}
      </div>
        <button className="input-button" type="submit">
          Submit
        </button>
      </form>
      )
    }
       
     
            </>
  );
};

export default NextFormOtp;
