import React from 'react';

import { useForm } from '../../hooks/useForm';

const initialValues = {
  email: '',
  password: ''
};

const LoginForm = ({ login }) => {
  const [form, setForm, handleChange] = useForm(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    login(form);

    setForm({
      email: '',
      password: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <button>Login</button>
    </form>
  )
}

export { LoginForm };
