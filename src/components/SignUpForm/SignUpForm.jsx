import React from 'react';

import { useForm } from '../../hooks/useForm';



const initialValues = {
  name: '',
  email: '',
  userType: '',
  password: ''
};

const SignUpForm = () => {
  const [form, setForm, handleChange] = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

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
