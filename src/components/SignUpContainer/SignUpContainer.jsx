import React from 'react';

import { SignUpForm } from '../SignUpForm/SignUpForm';

import './signUpContainer.scss';

const SignUpContainer = ({ signUp, skipToLogin }) => {
  // ACCEPT TERMS AND POLICY
  const showConfirmation = () => {
    window.confirm('Click OK to agree');
  }
  
  return (
    <div className="form__container">
      <span id="form-header">
        Let's set up your account
      </span>
      
      <div id="sign-in-question__container">
        <span id="sign-in-question">

          Already have an account?&nbsp;
          <span onClick={skipToLogin}>
            Sign in
          </span>

        </span>
      </div>

      <SignUpForm signUp={signUp} />

      <div id="terms__container">
        <span id="terms-text">

          By clicking the "Next" button, you agree 
          to creating a free account, and to&nbsp;

          <span onClick={showConfirmation}>
            Terms of Service&nbsp;
          </span>
          and&nbsp;
          <span onClick={showConfirmation}>
            Privacy Policy.
          </span>

        </span>
      </div>
    </div>
  )
}

export { SignUpContainer };
