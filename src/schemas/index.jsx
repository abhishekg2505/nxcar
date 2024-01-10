import * as Yup from "yup";
export const signUpSchema = Yup.object({
  phone: Yup.string().matches(/^[6-9]\d{9}$/, 'Phone number must contain only digits').required("Please enter your phone number"),
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  vehicle_number: Yup.string().matches(/^[6-9]\d{9}$/, 'vehicle number is not valid').required("Please enter your vehicle number"),

  
});