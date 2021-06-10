import React, { useEffect, useState } from 'react';

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
  const [emailError, setEmailError] = useState({ flag: false });
  const [submit, setSubmit] = useState({ disabled: true });

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

    setEmailError({ flag: false });

    if (!form.email.includes('@')) {
      return setEmailError({ flag: true });
    }

    signUp(form);

    setForm({
      name: '',
      email: '',
      userType: '',
      password: ''
    });
  }

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Your name"
        type="text"
        value={form.name}
      />

      <input
        name="email"
        onChange={handleChange}
        placeholder="Email address"
        style={{
          backgroundColor: emailError.flag ? 'pink' : 'white'
        }}
        type="email"
        value={form.email}
      />

      {emailError.flag && <span className="error-text">Please enter a valid email.</span>}

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
        name="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
        value={form.password}
      />
      <span id="password-info">Minimum 8 characters</span>
      
      <button disabled={submit.disabled}>Next</button>
    </form>
  )
}

export { SignUpForm };
