import { useState, useEffect } from 'react';

function useValidation(initialValues) {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validate() {
    const newErrors = {};
    if (!form.username) {
      newErrors.username = 'Username is required';
    } else if (form.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Password and Confirm Password must match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function resetForm(){
    setForm(initialValues);
  }
  useEffect(() => {
    validate();
  }, [form]);

  return [form, handleChange, errors, validate, resetForm];
}

export { useValidation }