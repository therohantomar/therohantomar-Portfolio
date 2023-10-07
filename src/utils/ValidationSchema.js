import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(20, 'Name must be less than 20 characters')
      .required('Name is required'),
    phoneNumber: Yup.string()
      .max(10, 'Phone number must be 10 digits or less')
      .required('Phone number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });
