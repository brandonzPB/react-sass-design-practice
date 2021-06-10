import React from 'react';

import { useForm } from '../../hooks/useForm';

const initialValues = {
  name: '',
  email: '',
  userType: '',
  password: ''
};

const SignUpForm = ({ signUp }) => {
  const [form, setForm, handleChange] = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    signUp(form);

    setForm({
      name: '',
      email: '',
      userType: '',
      password: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
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
        type="email"
        value={form.email}
      />

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
    </form>
  )
}

export { SignUpForm };
