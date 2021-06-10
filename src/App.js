import React, { useState } from 'react';

import { FormContainer } from './components/FormContainer';
import { FormProgress } from './components/FormProgress';
import { LoginForm } from './components/LoginForm';

const initialState = {
  email: '',
  name: '',
  password: '',
  userType: '',
};

const USER_API = {
  email: '',
  name: '',
  password: '',
  userType: ''
};

function App() {
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState({ status: false });
  const [authStep, setAuthStep] = useState(1);

  const signUp = (form) => {
    USER_API.email = form.email;
    USER_API.name = form.name;
    USER_API.password = form.password;
    USER_API.userType = form.userType;

    setAuthStep(step => step + 1);
  }

  const login = (credentials) => {
    setLoading({ status: true });

    if (USER_API.email !== credentials.email) return;

    if (USER_API.password !== credentials.password) return;

    setTimeout(() => {
      setUser({
        email: credentials.email,
        name: credentials.name,
        password: credentials.password,
        userType: credentials.userType
      });
      
      setAuthStep(step => step + 1);

      setLoading({ status: false });
    }, 1500);
  }

  return (
    <div className="App">
      <div id="head">
        <FormProgress authStep={authStep} />
      </div>

      <div id="body">
        {
          loading.status
            ? <Loading />
            : <FormContainer signUp={signUp} />
        }
      </div>
    </div>
  );
}

export default App;
