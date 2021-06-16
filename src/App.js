import React, { useState } from 'react';

import { API } from './services/api';
import { Dummy } from './components/Dummy/Dummy';
import { FormProgress } from './components/FormProgress/FormProgress';
import { Loading } from './components/Loading/Loading';
import { LoginForm } from './components/LoginForm/LoginForm';
import { SignUpContainer } from './components/SignUpContainer/SignUpContainer';
import { Welcome } from './components/Welcome/Welcome';

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
  const [api, setApi] = useState(initialState);

  // SKIP SIGN UP; GO TO LOGIN
  const skipToLogin = () => {
    // continue to step 2
    setAuthStep(step => step + 1);
  }

  // SIGN UP
  const signUp = (form) => {
    const userApi = new API(form);

    setApi({
      email: userApi.email,
      name: userApi.name,
      password: userApi.password,
      userType: userApi.userType
    });

    // continue to step 2
    setAuthStep(step => step + 1);
  }

  // LOGIN
  const login = (credentials) => {
    setLoading({ status: true });

    let error = null;

    if (credentials.email !== api.email) {
      error = 'email error';
    } else if (credentials.password !== api.password) {
      error = 'password error';
    }

    if (error) {
      setLoading({ status: false });
      return error;
    }

    // correct credentials: login and...
    // continue to next authStep...
    // while simulating an asynchronous API call
    setTimeout(() => {
      setUser({
        email: credentials.email,
        name: api.name,
        password: credentials.password,
        userType: api.userType
      });
      
      // continue to step 3
      setAuthStep(step => step + 1);

      setLoading({ status: false });

      return 'success';
    }, 1500);
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
                : <Welcome user={user} />
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
