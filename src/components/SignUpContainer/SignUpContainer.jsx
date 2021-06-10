import React from 'react';

import { SignUpForm } from '../SignUpForm/SignUpForm';

import './signUpContainer.scss';

const FormContainer = ({ signUp, skipToLogin }) => {
  // ACCEPT TERMS AND POLICY
  const showConfirmation = () => {
    window.confirm('Click OK to agree');
  }

  return (
    <div className="form-container">
      <span id="form-header">
        Let's set up your account
      </span>
      
      <div id="sign-in-text__container">
        <span id="sign-in-text">

          Already have an account?
          <span onClick={skipToLogin}>
            Sign in
          </span>

        </span>
      </div>

      <SignUpForm signUp={signUp} />

      <div id="terms__container">
        <span id="terms-text">

          By clicking the "Next" button, you agree 
          to creating a free account, and to 

          <span onClick={showConfirmation}>
            Terms of Service
          </span>
          and
          <span onClick={showConfirmation}>
            Privacy Policy.
          </span>

        </span>
      </div>
    </div>
  )
}

export { FormContainer };
