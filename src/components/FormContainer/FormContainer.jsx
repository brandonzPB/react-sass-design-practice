import React, { useEffect, useRef } from 'react';

import { SignUpForm } from '../SignUpForm/SignUpForm';

const FormContainer = ({ signUp }) => {
  const formRef = useRef(true);

  useEffect(() => {
    return () => {
      formRef.current = false;
    }
  }, []);

  return (
    <div className="form-container">
      <span id="form-header">
        Let's set up your account
      </span>
      
      <div id="sign-in-text__container">
        <span id="sign-in-text">

          Already have an account?
          <a href="#" >
            Sign in
          </a>

        </span>
      </div>

      <SignUpForm signUp={signUp} />

      <div id="terms__container">
        <span id="terms-text">

          By clicking the "Next" button, you agree 
          to creating a free account, and to 

          <a href="#">
            Terms of Service
          </a>
          and
          <a href="#">
            Privacy Policy.
          </a>

        </span>
      </div>
    </div>
  )
}

export { FormContainer };
