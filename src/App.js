import React, { useState } from 'react';

import { api } from './services/api';
import { Dummy } from './components/Dummy/Dummy';
import { FormProgress } from './components/FormProgress/FormProgress';
import { Loading } from './components/Loading/Loading';
import { LoginForm } from './components/LoginForm/LoginForm';
import { SignUpContainer } from './components/SignUpContainer/SignUpContainer';

import './scss/style.scss';

const initialState = {
  email: '',
  name: '',
  password: '',
  userType: '',
};

function App() {
  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState({ status: false });
  const [authStep, setAuthStep] = useState(1);

  // SKIP SIGN UP; GO TO LOGIN
  const skipToLogin = () => {
    // continue to step 2
    setAuthStep(step => step + 1);
  }

  // SIGN UP
  const signUp = (form) => {
    api.email = form.email;
    api.name = form.name;
    api.password = form.password;
    api.userType = form.userType;

    // continue to step 2
    setAuthStep(step => step + 1);
  }

  // LOGIN
  const login = (credentials) => {
    setLoading({ status: true });

    let error = null;

    if (api.email !== credentials.email) {
      error = 'email error';
    } else if (api.password !== credentials.password) {
      error = 'password error';
    }

    if (error) {
      setLoading({ status: false });
      return error;
    }

    // correct credentials: login and...
    // continue to next authStep
    setTimeout(() => {
      setUser({
        email: credentials.email,
        name: credentials.name,
        password: credentials.password,
        userType: credentials.userType
      });
      
      // continue to step 3
      setAuthStep(step => step + 1);

      setLoading({ status: false });

      return 'success';
    }, 1500);
  }

  // COMPLETE AUTHENTICATION PROCESS
  const completeAuth = () => {
    // set authStep to 4 (completed step 3)
    setAuthStep(step => step + 1);
  }

  return (
    <div className="App">
      <div id="left__container">
        <div id="head">
          <FormProgress authStep={authStep} />
        </div>

        <div id="body">
          {
            authStep === 1
              ? <SignUpContainer signUp={signUp} skipToLogin={skipToLogin} />
              : authStep === 2
                ? <>
                  {
                    loading.status
                      ? <Loading />
                      : <LoginForm login={login} />
                  }
                </>
                : <></>
          }
        </div>
      </div>

      <div id="right__container">
        <Dummy />
      </div>
    </div>
  );
}

export default App;
