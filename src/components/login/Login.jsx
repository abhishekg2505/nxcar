import React, { useState } from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from "../../schemas";
import NextFormOtp from './NextFormOtp';

const initialValues = {
    phone: "",
    name: "",
    email: "",
    vehicle_number: "",
  };
const Login = ({ isOpen, toggleDrawer }) => {
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [phone, setPhone] = useState();
    const toggleDrawerClose = () => {
        toggleDrawer(!isOpen)
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await fetch('https://dev.nxfin.in/api/uat.app//login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              mobile: values.phone,
              signature: 'hbhsdghadhaj', // Replace this with the actual signature logic
            }),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('API Response:', data);
          setPhone(data.mobile);
          setIsFormCompleted(true)
        } catch (error) {
          console.error('There was a problem with the request:', error);
          setIsFormCompleted(false)
        }
        
        action.resetForm();
      },
    });
  // console.log(
  //   "errors",
  //   errors
  // );

    return (
        <div className="container">
            <div className={`drawer ${isOpen ? 'open' : ''}`}>
              
                <button className="closebtn" onClick={toggleDrawerClose}>&times;</button>
                
                
                {
                isFormCompleted ? (
                  <>
                  <h4>Want to buy a car?</h4>
                <p>Enter OTP to verify your number</p>
                <NextFormOtp phoneNumber={phone} />
                  </>
                ) :(
                  <>
                  <h4>Want to buy a car?</h4>
                <p>Please fill out the details</p>
                  <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input 
                            type="text"
                            autoComplete='off' 
                            id="phone" 
                            name="phone" 
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <label htmlFor="phone">Enter your number</label>
                        </div>
                            {errors.phone && touched.phone ? (
                      <p className="form-error">{errors.phone}</p>
                    ) : null}

                        <div className="input-container">
                            <input 
                            type="text"
                            autoComplete='off' 
                            id="name" 
                            name="name" 
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <label htmlFor="name">Enter your name</label>
                        </div>
                            {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}

                        <div className="input-container">
                            <input 
                            type="email" 
                            autoComplete='off'
                            id="email" 
                            name="email" 
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <label htmlFor="email">Enter your email</label>
                        </div>
                            {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                        <div className="input-container">
                            <input 
                            type="text" 
                            autoComplete='off'
                            id="vehicle_number" 
                            name="vehicle_number" 
                            value={values.vehicle_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <label htmlFor="vehicle_number">Enter Vehicle Number</label>
                        </div>
                            {errors.vehicle_number && touched.vehicle_number ? (
                      <p className="form-error">{errors.vehicle_number}</p>
                    ) : null}
                        <button className="input-button" type="submit">Next</button>
                    </form>
                </div>
                  </>
                )
              }
                
            </div>
            <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleDrawerClose}></div>
        </div>
    );
}


export default Login