import React, { useEffect, useRef, useState } from 'react';

import { useForm } from '../../hooks/useForm';

import './loginForm.scss';

const initialValues = {
  email: '',
  password: ''
};

const LoginForm = ({ login }) => {
  const [form, setForm, handleChange] = useForm(initialValues);
  const [error, setError] = useState({ field: '' });

  const loginRef = useRef(true);

  useEffect(() => {
    return () => {
      loginRef.current = false;
    }
  }, []);

  // SUBMIT FORM
  const handleSubmit = (event) => {
    event.preventDefault();

    setError({ field: '' });

    const result = login(form);

    if (result !== 'success') {
      return result === 'email error'
        ? setError({ field: 'email' })
        : setError({ field: 'password' });
    }

    if (loginRef.current) {
      setForm({
        email: '',
        password: ''
      });
    }
  }

  return (
    <div id="login__container">
      <span id="login-header">Great! Now let's get you logged in</span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          style={{
            backgroundColor: error.field === 'email' ? 'pink' : 'none'
          }}
          type="email"
          value={form.email}
        />

        {error.field === 'email' && <span className="error-text">Email not found.</span>}

        <input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          style={{
            backgroundColor: error.field === 'password' ? 'pink' : 'none'
          }}
          type="password"
          value={form.password}
        />

        {error.field === 'password' && <span className="error-text">Incorrect password.</span>}

        <button>Login</button>
      </form>
    </div>
  )
}

export { LoginForm };
