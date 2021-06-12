import React, { useEffect, useRef, useState } from 'react';

import { useForm } from '../../hooks/useForm';

import './signUpForm.scss';

const initialValues = {
  email: '',
  name: '',
  password: '',
  userType: '',
};

const SignUpForm = ({ signUp }) => {
  const [form, setForm, handleChange] = useForm(initialValues);
  const [error, setError] = useState({ field: '' });
  const [submit, setSubmit] = useState({ disabled: true });

  const signupRef = useRef(true);

  useEffect(() => {
    return () => {
      signupRef.current = false;
    }
  }, []);

  // enables submit button once every field is completed
  useEffect(() => {

    if (form.email.trim()    &&
        form.name.trim()     &&
        form.password.trim() &&
        form.userType.trim()
    ) {
      setSubmit({ disabled: false });
    } else {
      // disables submit button if a field is empty
      setSubmit({ disabled: true });
    }
    
  }, [form, setSubmit]);

  // SUBMIT FORM
  const handleSubmit = (event) => {
    event.preventDefault();

    setError({ field: '' });

    if (!form.email.includes('@')) {
      return setError({ field: 'email' });
    } else if (form.password.length < 8) {
      return setError({ field: 'password' });
    }

    signUp(form);

    if (signupRef.current) {
      setForm({
        name: '',
        email: '',
        userType: '',
        password: ''
      });
    }
  }

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <input
        className="input"
        name="name"
        onChange={handleChange}
        placeholder="Your name"
        type="text"
        value={form.name}
      />

      <input
        className="input"
        name="email"
        onChange={handleChange}
        placeholder="Email address"
        style={{
          backgroundColor: error.field === 'email' ? 'pink' : 'white'
        }}
        type="email"
        value={form.email}
      />

      {error.field === 'email' && <span className="error-text">Please enter a valid email.</span>}

      <select
        name="userType"
        onChange={handleChange}
        value={form.userType}
      >
        <option value="" disabled={true}>I would describe my user type as</option>
        <option value="employee">Employee</option>
        <option value="employer">Employer</option>
        <option value="student">Student</option>
        <option value="other">Other</option>
      </select>

      <input
        className="input"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
        value={form.password}
      />
      
      {error.field === 'password' && <span className="error-text">Password must be at least 8 characters</span>}
      
      <span id="password-info">Minimum 8 characters</span>
      
      <button disabled={submit.disabled}>Next</button>
    </form>
  )
}

export { SignUpForm };
