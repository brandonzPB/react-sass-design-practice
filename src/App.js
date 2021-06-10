import React, { useState } from 'react';

import { SignUpContainer } from './components/SignUpContainer/SignUpContainer';
import { FormProgress } from './components/FormProgress/FormProgress';
import { Loading } from './components/Loading/Loading';
import { LoginForm } from './components/LoginForm/LoginForm';

const initialState = {
  email: '',
  name: '',
  password: '',
  userType: '',
};

// used to "verify" credentials
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

  // SKIP SIGN UP; GO TO LOGIN
  const skipToLogin = () => {
    // continue to step 2
    setAuthStep(step => step + 1);
  }

  // SIGN UP
  const signUp = (form) => {
    USER_API.email = form.email;
    USER_API.name = form.name;
    USER_API.password = form.password;
    USER_API.userType = form.userType;

    // continue to step 2
    setAuthStep(step => step + 1);
  }

  // LOGIN
  const login = (credentials) => {
    setLoading({ status: true });

    let error = null;

    if (USER_API.email !== credentials.email) {
      error = 'email error';
    } else if (USER_API.password !== credentials.password) {
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
      <div id="head">
        <FormProgress authStep={authStep} />
      </div>

      <div id="body">
        {
          authStep === 1
            ? <>
            {
              loading.status
                ? <Loading />
                : <SignUpContainer signUp={signUp} skipToLogin={skipToLogin} />
            }
            </>
            : authStep === 2
              ? <LoginForm login={login} />
              : <></>
        }
      </div>
    </div>
  );
}

export default App;
